from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAuthenticatedOrReadOnly
from rest_framework.decorators import api_view, permission_classes
from .models import Reply
from .serializers import ReplySerializer
from django.shortcuts import get_object_or_404

@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def reply_list(request):
    comment_id = request.query_params.get('commentId')

    if request.method == 'GET':
        queryset = Reply.objects.filter(comment = comment_id)
        serializer = ReplySerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    if request.method == 'POST':
        serializer = ReplySerializer(data=request.data, partial=True)
        comment_id = int(comment_id)
        if serializer.is_valid():
            serializer.save(user=request.user, comment = comment_id)
            return Response(serializer.data, status=status.HTTP_201_CREATED)


