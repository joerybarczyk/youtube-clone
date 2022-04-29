from django.urls import path
from comments import views

urlpatterns = [
    path('', {...}), # POST
    path('<int:video_id>/', {...})  #GET, PUT
    
]