from flask.cli import AppGroup
from app.models.db import environment, SCHEMA
from .users import seed_users, undo_users
from .categories import seed_categories, undo_categories
from .games import seed_games, undo_games
from .cover_arts import seed_cover_arts, undo_cover_arts
from .screenshots import seed_screenshots, undo_screenshots
from .reviews import seed_reviews, undo_reviews


# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup("seed")


# Creates the `flask seed all` command
@seed_commands.command("all")
def seed():
    if environment == "production":
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_users()
        undo_categories()
        undo_games()
        undo_cover_arts()
        undo_screenshots()
        undo_reviews()
    seed_users()
    seed_games()
    seed_categories()
    seed_cover_arts()
    seed_screenshots()
    seed_reviews()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command("undo")
def undo():
    undo_users()
    undo_categories()
    undo_games()
    undo_cover_arts()
    undo_screenshots()
    undo_reviews()
    # Add other undo functions here
