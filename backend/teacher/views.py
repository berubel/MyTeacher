from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Teacher
from .serializers import TeacherSerializer
from rest_framework.status import HTTP_200_OK

# Create your views here.

class TeacherAPIView(APIView):
    def get(self, request, format=None):
        teacher = Teacher.objects.all()
        serializer = TeacherSerializer(teacher, many=True)

        return Response(serializer.data, status=HTTP_200_OK)