
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_alter_servicerequest_comment'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='servicerequest',
            options={'verbose_name': 'заявка', 'verbose_name_plural': 'Заявки'},
        ),
        migrations.AlterModelOptions(
            name='specialist',
            options={'verbose_name': 'специалист', 'verbose_name_plural': 'Специалисты'},
        ),
    ]
