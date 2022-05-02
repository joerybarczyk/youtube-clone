from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.decorators import api_view, permission_classes
from .models import Comment
from .serializers import CommentSerializer
from django.shortcuts import get_object_or_404

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def comment_detail(request, comment_id):
    query_set = get_object_or_404(Comment, id=comment_id)
    serializer = CommentSerializer(query_set, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET','POST'])
@permission_classes([IsAuthenticatedOrReadOnly])
def comment_list(request):
    video_id = request.query_params.get("video")

    if request.method == "GET":
        queryset = Comment.objects.all()
        if video_id:
            queryset = queryset.filter(video_id = video_id)
        serializer = CommentSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    if request.method == "POST":
        comment_format = {
            "video_id": video_id,
            "text": request.data['text']
        }
        serializer = CommentSerializer(data=comment_format)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
