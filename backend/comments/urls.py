from django.urls import path
from comments import views

urlpatterns = [
    path('', {...}), # POST
    path('video/<int:video_id>/', {...}),  #GET
    path(',int:comment_id',) #PUT
    
]