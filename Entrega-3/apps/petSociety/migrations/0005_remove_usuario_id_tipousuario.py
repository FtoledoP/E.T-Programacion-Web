# Generated by Django 4.2.2 on 2023-06-25 03:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('petSociety', '0004_usuario_id_tipousuario'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='usuario',
            name='id_tipoUsuario',
        ),
    ]