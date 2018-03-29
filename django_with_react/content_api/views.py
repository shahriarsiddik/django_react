from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response

class ContentViewSet(viewsets.ViewSet):
    def list(self,request):
        return Response("Success")