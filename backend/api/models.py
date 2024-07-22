from django.db import models


class Item(models.Model):
    name = models.CharField(max_length=100)
    email=models.CharField(max_length=100, null=True)
    phonenumber=models.CharField(max_length=15, null=True)
    telephone=models.CharField(max_length=15, null=True)
    birthday=models.DateField(max_length=15, null=True)
    age=models.CharField(max_length=3, null=True)
    sex=models.CharField(max_length=100, null=True)
    bloodtype=models.CharField(max_length=10,null=True)
    weight=models.CharField(max_length=10,null=True)
    height=models.CharField(max_length=10,null=True)
    gsis=models.CharField(max_length=100,null=True)
    pagibig=models.CharField(max_length=100,null=True)
    civilsts=models.CharField(max_length=100,null=True)
    citizenship=models.CharField(max_length=100,null=True)
    residentialaddress=models.CharField(max_length=100,null=True)
    permanentaddress=models.CharField(max_length=100,null=True)
    zipcode=models.CharField(max_length=100,null=True)
    mothername=models.CharField(max_length=100,null=True)
    occupation=models.CharField(max_length=100,null=True)
    fathername=models.CharField(max_length=100,null=True)
    occupation2=models.CharField(max_length=100,null=True)
    description = models.TextField()
    
    

    def __str__(self):
        return self.name
