# Generated by Django 4.1.2 on 2022-10-10 00:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('teacher', '0002_class'),
    ]

    operations = [
        migrations.AlterField(
            model_name='class',
            name='email',
            field=models.EmailField(max_length=255),
        ),
    ]