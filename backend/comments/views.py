from urllib import request
from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAuthenticatedOrReadOnly
from rest_framework.decorators import api_view, permission_classes
from .models import Comment
from .serializers import CommentSerializer


# Create your views here.


@api_view(['GET', 'PUT'])
@permission_classes([IsAuthenticatedOrReadOnly])
def get_all_comments(request, video_id):
    if request.method == 'GET':
        query_set = Comment.objects.filter(video_id = video_id)
        serializer = CommentSerializer(query_set, many=True)
        return Response(serializer.data, status= status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_comment():
    if request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)






