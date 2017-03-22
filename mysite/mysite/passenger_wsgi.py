import os, sys

site_user_root_dir = '/home/i/ivradidb/ivradidb.bget.ru/public_html'

#project directory
sys.path.append(os.path.join(site_user_root_dir, 'mysite'))
sys.path.append(os.path.join(site_user_root_dir, 'dcms/lib/python2.7/site-packages'))

#project settings
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "mysite.settings")

#start server
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
