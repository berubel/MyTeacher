from rest_framework import serializers
from teacher.models import Teacher, Class

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = '__all__'

class RegisterClassSerializer(serializers.Serializer):
    class Meta:
        name = serializers.CharField(max_length=100)
        email = serializers.EmailField(max_length=255)

class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Class
        fields = '__all__'