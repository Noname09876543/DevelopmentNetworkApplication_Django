
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_alter_servicerequest_finished_at_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='servicerequest',
            name='comment',
            field=models.TextField(blank=True),
        ),
    ]
