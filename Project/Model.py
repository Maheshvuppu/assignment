# models.py

from django.db import models

class Event(models.Model):
    name = models.CharField(max_length=200)
    date = models.DateField()
    description = models.TextField()
    likes = models.ManyToManyField(User, blank=True, related_name='liked_events')
