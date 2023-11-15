
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('app', '0006_alter_servicerequest_options_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='specialist',
            options={'verbose_name': 'Специалист', 'verbose_name_plural': 'Специалисты'},
        ),
        migrations.RemoveField(
            model_name='servicerequest',
            name='specialist',
        ),
        migrations.AlterField(
            model_name='servicerequest',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='servicerequest',
            name='specialist',
            field=models.ManyToManyField(related_name='requests', to='app.specialist'),
        ),
    ]
