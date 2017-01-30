import os
import json


from flask import Flask, render_template, flash, request, url_for, redirect, g, session, render_template_string
from flask.ext.login import LoginManager
from flask_login import current_user

from flask.ext.github import GitHub
from model import User, connect_to_db, db

from flask_debugtoolbar import DebugToolbarExtension
from jinja2 import StrictUndefined


app = Flask(__name__)

app.secret_key = os.environ['FLASK_SECRET_KEY']

app.config['GITHUB_CLIENT_ID'] = os.environ['GITHUB_CLIENT_ID']
app.config['GITHUB_CLIENT_SECRET'] = os.environ['GITHUB_CLIENT_SECRET']

github = GitHub(app)

app.jinja_env.auto_reload = True
app.jinja_env.undefined = StrictUndefined

# Run 'source secrets.sh' before running this
# file to set required environmental variables.


@app.before_request
def before_request():
    g.user = None
    if 'user_id' in session:
        g.user = User.query.get(session['user_id'])


@app.after_request
def after_request(response):
    db.session.remove()
    return response


@app.route('/')
def home():
    if g.user:
        t = 'Hello! <a href="{{ url_for("user") }}">Get user</a> ' \
            '<a href="{{ url_for("logout") }}">Logout</a>'
    else:
        t = 'Hello! <a href="{{ url_for("login") }}">Login</a>'

    return render_template_string(t)


@github.access_token_getter
def token_getter():
    user = g.user
    if user is not None:
        return user.github_access_token


@app.route('/github-callback')
@github.authorized_handler
def authorized(oauth_token):
    next_url = request.args.get('next') or url_for('home')
    if oauth_token is None:
        flash("Authorization failed.")
        return redirect(next_url)

    user = User.query.filter_by(github_access_token=oauth_token).first()
    if user is None:
        user = User(github_access_token=oauth_token)
        db.session.add(user)

    user.github_access_token = oauth_token
    db.session.commit()

    session['user_id'] = user.id
    return redirect(next_url)


@app.route('/login')
def login():

    if session.get('user_id', None) is None:
        return github.authorize(scope="user,repo")
    else:
        return 'Already logged in'
    return github.authorize(scope="user,repo")


@app.route('/logout')
def logout():
    session.pop('user_id', None)
    return redirect(url_for('home'))


@app.route('/user')
def user():

    stats = {}
    repo_dict = github.get('repos/nodejs/node/pulls', params='state:closed')

    for item in repo_dict:
        user = item['user']['login']
        stats[user] = stats.get(user, {'open_pulls': 0,
                                       'merged_pulls': 0,
                                       'unmerged_pulls': 0})

        if item['state'] == 'open':
            stats[user]['open_pulls'] += 1

        if item['state'] == 'closed' and item['merged']:
            stats[user]['merged_pulls'] += 1

        if item['state'] == 'closed' and not item['merged']:
            stats[user]['unmerged_pulls'] += 1

    name = str(github.get('user')['name']).split()
    return render_template('home.html', first_name=name[0], stats=stats)


@app.route('/github-callback')
@github.authorized_handler
def authorized(oauth_token):

    next_url = request.args.get('next') or url_for('index')

    if oauth_token is None:
        flash("Authorization failed.")
        return redirect(next_url)

    user = User.query.filter_by(github_access_token=oauth_token).first()
    if user is None:
        user = User(oauth_token)
        db_session.add(user)

    user.github_access_token = oauth_token
    db_session.commit()
    return redirect(next_url)


if __name__ == '__main__':

    DebugToolbarExtension(app)
    connect_to_db(app)

    app.run(port=5000, debug=True, host='0.0.0.0')
