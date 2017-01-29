# Getting Set Up
This assumes you have [Laravel Homestead](http://laravel.com/docs/homestead) already set up globally.

1.  Install composer packages:

  ```shell
  composer install
  ```

2.  Set up the database:
  ```shell
  artisan db:create
  ```
    * This will create a new MySQL database called 'latchel' (as specified in the ```.env``` file)
    * This uses the default Homestead MySQL user homestead // secret

  ```shell
  artisan migrate:install
  ```

  ```shell
  artisan migrate:refresh
  ```

  ```shell
  artisan latchel:update-repo-stats
  ```
    * This will mimic a cron job to ingest latest GitHub stats (might take 1-2 min)

3.  Update Homestead.yaml and hosts file to complete setup