# Generated by Django 4.2.13 on 2024-07-09 12:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_rename_name_item_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='email',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='phonenumber',
            field=models.CharField(max_length=15, null=True),
        ),
    ]
