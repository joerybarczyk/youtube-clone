from django.urls import path
from comments import views

urlpatterns = [
    path('', views.comment_list), # GET, POST
    path('<int:comment_id>/', views.comment_detail) #PUT
]
