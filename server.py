import os
import json

from flask import Flask, render_template
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


if __name__ == '__main__':

    DebugToolbarExtension(app)

    app.run(port=5000, debug=True, host='0.0.0.0')
