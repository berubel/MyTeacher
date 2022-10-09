from dataclasses import field
from rest_framework.serializers import ModelSerializer
from teacher.models import Teacher

class TeacherSerializer(ModelSerializer):
    class Meta:
        model = Teacher
        fields = '__all__'