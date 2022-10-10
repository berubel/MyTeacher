from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST
from django.shortcuts import get_object_or_404
from .models import Teacher, Class
from .serializers import(
    TeacherSerializer, 
    RegisterClassSerializer, 
    ClassSerializer
) 

# Create your views here.

class TeacherAPIView(APIView):
    def get(self, request, format=None):
        teacher = Teacher.objects.all()
        serializer = TeacherSerializer(teacher, many=True)

        return Response(serializer.data, status=HTTP_200_OK)

class RegisterClassAPIView(APIView):
    def post(self, request, id, format=None):
        teacher = get_object_or_404(Teacher, id=id)
        serializer = RegisterClassSerializer(data=request.data)
        name = request.data.get("name")
        email = request.data.get("email")

        if serializer.is_valid():
            lesson = Class(
                name=name,
                email=email,
                teacher=teacher,
            )
            lesson.save()
            lesson_serializer = ClassSerializer(lesson, many=False)
            return Response(lesson_serializer.data, status=HTTP_201_CREATED)
        return Response(
            {
            "message": "There were validation errors", 
            "errors": serializer.errors
            }, 
            status=HTTP_400_BAD_REQUEST)

