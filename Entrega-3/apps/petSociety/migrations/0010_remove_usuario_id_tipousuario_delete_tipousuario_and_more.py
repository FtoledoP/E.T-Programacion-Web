# Generated by Django 4.2.2 on 2023-06-25 03:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('petSociety', '0009_alter_usuario_id_tipousuario'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='usuario',
            name='id_tipoUsuario',
        ),
        migrations.DeleteModel(
            name='TipoUsuario',
        ),
        migrations.DeleteModel(
            name='Usuario',
        ),
    ]
