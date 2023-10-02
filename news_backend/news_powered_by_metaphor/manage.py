import click
from flask.cli import with_appcontext


@click.command("init")
@with_appcontext
def init():
    """Create a new admin user"""
    from news_powered_by_metaphor.extensions import db
    from news_powered_by_metaphor.models import User

    click.echo("create user")
    user = User(username="admin", email="ch.saiprakash22@gmail.com", password="admin", active=True)
    db.session.add(user)
    db.session.commit()
    click.echo("created user admin")
