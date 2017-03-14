# Latchel Internal Tool Setup

## Setup

This setup assumes that Rails is already on your system. Installing Rails is outside the scope of this setup doc, but there are many guides online that can help you.

CD into the repo-audit directory (`cd source/repo-audit`).

`bundle install` to load dependencies.

`rake db:migrate` to run migrations

`rails s` to start the server, and then visit localhost:3000 to see the site live