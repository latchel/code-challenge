"""Database pulled from Flask-SQLAlchemy library."""

from flask_sqlalchemy import SQLAlchemy

# db allows me to find the 'session' object where the majority of my database
# interactions will occur (such as committing, querying, etc.)


db = SQLAlchemy()


# All of my models will subclass db.Model.
# This declares that a class will be managed by SQLAlchemy.
# The Model class contains the __init__() method, so I don't need to include it.
class User(db.Model):
    """Stores information about Latchel's product managers."""

    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    github_access_token = db.Column(db.String(40), unique=True)
    first_name = db.Column(db.String(30))
    last_name = db.Column(db.String(30))

    def __init__(self, github_access_token):
        self.github_access_token = github_access_token

    def __repr__(self):
        return "<User: {} {}>".format(self.first_name,
                                      self.last_name)


class Engineers(db.Model):
    """Stores information about Latchel's engineers."""

    __tablename__ = "engineers"

    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)

    github_id = db.Column(db.String(20),
                          unique=True)

    first_name = db.Column(db.String(30),
                           nullable=False)

    last_name = db.Column(db.String(30),
                          nullable=False)

    def __repr__(self):
        return "<User: {} {}, {}, {}>".format(self.first_name,
                                              self.last_name,
                                              self.github_id)


# class Activity(db.Model):
#     """Stores info about the engineers' Github activity on Node repo."""

#     __tablename__ = "activity"

#     id = db.Column(db.Integer,
#                    primary_key=True,
#                    autoincrement=True)

#     relatp_type = db.Column(db.String(3),
#                             default='fr')

#     rcmdn = db.Column(db.Text,
#                       nullable=False)

    # Join the recommendation table and relationship table through the
    # relatp_code. This allows me to navigate from the a user's contact to his/her
    # associated recommendations and vice versa.
    # relatp = db.relationship("Relationship",
    #                          secondary='rcmdns_relatps')

    # def __repr__(self):

    #     return "<Activity: relatp_type={}, rcmdn={}>".format(self.relatp_type,
    #                                                          self.rcmdn)



##########################
#### Helper Functions ####
##########################


def connect_to_db(app, db_uri="postgresql:///latchel"):
    """Connect to database."""

    app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.app = app
    db.init_app(app)


if __name__ == "__main__":
    """This is useful for running this module interactively. This will leave me
    in a state of being able to work with the database directly."""

    from server import app
    connect_to_db(app)
    print "Connected to DB."
