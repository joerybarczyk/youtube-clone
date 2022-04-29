from django.urls import path
from replies import views

urlpatterns = [
    path('<int:comment_id>/', {...}) #GET, POST
]