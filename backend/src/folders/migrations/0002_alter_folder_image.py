# Generated by Django 4.2.7 on 2023-11-07 10:56

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("folders", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="folder",
            name="image",
            field=models.ImageField(blank=True, null=True, upload_to=""),
        ),
    ]
