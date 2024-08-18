
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from django.contrib import admin
from django.urls import path, include
# from .swagger import BothHttpAndHttpsSchemaGenerator
import json
schema_view = get_schema_view(
   openapi.Info(
      title="Email-Verify API",
      default_version='v1',
      description="An API that will allow users to send sign up and the API will verify there emails by sending the emails usung the email submitted on sign up  ",

      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="user@email.com"),
      license=openapi.License(name="BSD License"),
   ),

   permission_classes=[permissions.AllowAny],
)



urlpatterns = [
    path('admin/', admin.site.urls),
    path('', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('', include('users.urls')),
    
]
