FROM php:7.4.3-fpm
LABEL version="1.0.0"
LABEL maintaner="Leonardo Aranguren S"

RUN apt-get update && apt-get install -y \
    npm \
    libpng-dev \
    libjpeg62-turbo-dev \ 
    libfreetype6-dev \
    libzip-dev \
    libxml2-dev \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-install zip pdo_mysql gd soap

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /app

COPY . .

RUN composer install

EXPOSE 8000

CMD [ "php", "artisan", "serve",  "--host=0.0.0.0"]
