from django.db import models

# Create your models here.
class HrEmployee(models.Model):
    first_name = models.CharField("First Name", max_length=255)
    last_name = models.CharField("Last Name", max_length=255)
    phone_number = models.CharField("Phone Number", max_length=255)