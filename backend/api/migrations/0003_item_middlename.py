# Generated by Django 4.2.13 on 2024-07-06 19:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_rename_name_item_firstname'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='MiddleName',
            field=models.CharField(default='Unknown', max_length=100),
        ),
    ]
