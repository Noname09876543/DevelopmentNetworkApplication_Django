
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_servicerequest'),
    ]

    operations = [
        migrations.AlterField(
            model_name='servicerequest',
            name='finished_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='servicerequest',
            name='formed_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]