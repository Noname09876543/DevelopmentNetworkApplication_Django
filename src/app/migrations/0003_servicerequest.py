
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('app', '0002_specialist_is_active'),
    ]

    operations = [
        migrations.CreateModel(
            name='ServiceRequest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment', models.TextField()),
                ('status', models.CharField(choices=[('CREATED', 'Создана'), ('IN_WORK', 'В работе'), ('CANCELED', 'Отменена'), ('FINISHED', 'Завершена'), ('DELETED', 'Удалена')], default='CREATED', max_length=8)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('formed_at', models.DateTimeField()),
                ('finished_at', models.DateTimeField()),
                ('specialist', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='requests', to='app.specialist')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='requests', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]