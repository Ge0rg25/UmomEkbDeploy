FROM certbot/certbot

# Эти директивы нужны для сохранения Let's Encrypt сертификатов и содержимого ваших сайтов
VOLUME /etc/letsencrypt
VOLUME /var/www/html

# Запустк Certbot с нужными параметрами
CMD ["certonly", "--webroot", "--webroot-path=/var/www/html", "--email", "Ge0rgiusGus@yandex.ru", "--agree-tos", "--no-eff-email", "-d", "umom.pro", "-d", "www.umom.pro", "-d", "backend.umom.pro", "-d", "auth.umom.pro"]

