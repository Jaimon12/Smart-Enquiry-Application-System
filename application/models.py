from django.db import models

class Application(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    qualification = models.CharField(max_length=100)
    course = models.CharField(max_length=100)
    message = models.TextField()

    def __str__(self):
        return self.full_name


class Enquiry(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    subject = models.CharField(max_length=100)
    message = models.TextField()

    def __str__(self):
        return self.name