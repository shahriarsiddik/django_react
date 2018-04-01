from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .models import HrEmployee
from .serializers import HrEmployeeSerializer


class HrEmployeeViewSet(viewsets.ModelViewSet):
    queryset = HrEmployee.objects.all()
    serializer_class = HrEmployeeSerializer