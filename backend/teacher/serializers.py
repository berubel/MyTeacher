from rest_framework import serializers
from teacher.models import Teacher, Class

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = '__all__'

class RegisterClass(serializers.Serializer):
    class Meta:
        name = serializers.CharField(max_length=100, null=False, blank=False)
        email = serializers.EmailField(max_length=255, null=False, blank=False)

class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Class
        fields = '__all__'