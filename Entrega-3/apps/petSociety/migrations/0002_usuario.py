# Generated by Django 4.2.2 on 2023-06-24 02:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('petSociety', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('correo', models.CharField(max_length=50, primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=50)),
                ('apellido', models.CharField(max_length=50)),
                ('password', models.CharField(max_length=50)),
            ],
        ),
    ]