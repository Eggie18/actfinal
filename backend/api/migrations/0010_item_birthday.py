# Generated by Django 4.2.13 on 2024-07-09 13:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_item_telephone'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='birthday',
            field=models.DateField(max_length=15, null=True),
        ),
    ]
