from django.shortcuts import render
from . import models

# Create your views here.
def index(req):
    about = models.About.objects.first()
    prj = models.Projects.objects.all()

    related = []

    for p in prj[::5]:
        if(len(p.description) > 10):
            p.description = p.description[:20]+' . . .'
        
        related.append(p)

    return render(req, 'index.html', {'about':about, 'rel':related})


def projects(req):

    return render(req, 'project.html')

