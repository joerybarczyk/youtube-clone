from django.urls import path
from comments import views

urlpatterns = [
    path('', views.add_comment), # POST
    path('video/<int:video_id>/', views.get_all_comments),  #GET
    path(',int:comment_id', views.update_comment) #PUT
    
]