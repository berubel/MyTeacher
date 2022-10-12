from django.forms import ValidationError
from rest_framework import serializers
from teacher.models import Teacher, Class

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = '__all__'

class RegisterClassSerializer(serializers.Serializer):
        name = serializers.CharField(max_length=100)
        email = serializers.EmailField(max_length=255)

        def validate_name(self, value):
            if len(value) < 3:
                raise ValidationError("It must be at least three characteres long.")
            return value

class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Class
        fields = '__all__'