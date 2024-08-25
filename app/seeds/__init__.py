from flask.cli import AppGroup
from app.models.db import environment, SCHEMA
from .users import seed_users, undo_users
from .categories import seed_categories, undo_categories
from .games import seed_games, undo_games
from .cover_arts import seed_cover_arts, undo_cover_arts
from .screenshots import seed_screenshots, undo_screenshots
from .reviews import seed_reviews, undo_reviews
from .shopping_carts import seed_shopping_carts, undo_shopping_carts
from .shopping_cart_items import seed_shopping_cart_items, undo_shopping_cart_items
from .game_categories import seed_game_categories, undo_game_categories
from .wishlists import seed_wishlists, undo_wishlists
from .libraries import seed_libraries, undo_libraries


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
        undo_shopping_cart_items()
        undo_shopping_carts()
        undo_libraries()
        undo_wishlists()
        undo_reviews()
        undo_screenshots()
        undo_cover_arts()
        undo_game_categories()
        undo_games()
        undo_categories()
        undo_users()
    seed_users()
    seed_categories()
    seed_games()
    seed_game_categories()
    seed_cover_arts()
    seed_screenshots()
    seed_reviews()
    seed_wishlists()
    seed_libraries()
    seed_shopping_carts()
    seed_shopping_cart_items()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command("undo")
def undo():
    undo_shopping_cart_items()
    undo_shopping_carts()
    undo_libraries()
    undo_wishlists()
    undo_reviews()
    undo_screenshots()
    undo_cover_arts()
    undo_game_categories()
    undo_games()
    undo_categories()
    undo_users()
    # Add other undo functions here
