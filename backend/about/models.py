from django.db import models

# Create your models here.

class About(models.Model):
    title = models.CharField(max_length=20)
    description = models.JSONField(default=dict)
    git_link = models.CharField(max_length=50)


    def __str__(self):
        return self.title
    

class Projects(models.Model):
    title = models.CharField(max_length=20)
    description = models.TextField()
    pub_date = models.DateField()
    prj_git_url = models.CharField(max_length=50)
    

    def __str__(self):
        return self.title
