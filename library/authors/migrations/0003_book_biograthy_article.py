# Generated by Django 4.0.5 on 2022-06-28 12:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('authors', '0002_remove_author_id_author_uid'),
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=32)),
                ('authors', models.ManyToManyField(to='authors.author')),
            ],
        ),
        migrations.CreateModel(
            name='Biograthy',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField()),
                ('author', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='authors.author')),
            ],
        ),
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=32)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='authors.author')),
            ],
        ),
    ]
