FROM php:7.4

RUN apt-get update && apt-get install -y \
      unzip

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /usr/src/app

COPY . .

RUN composer install

EXPOSE 3001

CMD ["composer", "run", "dev"]
