from dataclasses import field
from rest_framework import serializers
from teacher.models import Teacher

class TeacherSerializer(serializers.Model):
    class Meta:
        model = Teacher
        fields = '__all__'