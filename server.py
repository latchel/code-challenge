import os
import json

from flask import Flask, render_template, flash
from flask.ext.github import GitHub
from flask_debugtoolbar import DebugToolbarExtension
from jinja2 import StrictUndefined


app = Flask(__name__)

app.config['GITHUB_CLIENT_ID'] = os.environ['GITHUB_CLIENT_ID']
app.config['GITHUB_CLIENT_SECRET'] = os.environ['GITHUB_CLIENT_SECRET']

github = GitHub(app)

app.jinja_env.auto_reload = True
app.jinja_env.undefined = StrictUndefined

# Run 'source secrets.sh' before running this
# file to set required environmental variables.


@app.route('/')
def home():

    return render_template('home.html')


@app.route('/login')
def login():

    return github.authorize()


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

    app.run(port=5000, debug=True, host='0.0.0.0')
