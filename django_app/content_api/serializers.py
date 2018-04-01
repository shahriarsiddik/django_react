from rest_framework import serializers

from .models import HrEmployee

class HrEmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = HrEmployee
        fields = 'id', 'first_name', 'last_name', 'phone_number'
