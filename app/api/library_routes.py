from flask import Blueprint
from flask_login import current_user, login_required
from app.models import db, library, Game, User


library_routes = Blueprint("libraries", __name__)


# get all libraries
@library_routes.route("/all", methods=["GET"])
@login_required
def get_libraries():
    library_entries = (
        db.session.query(
            library.c.user_id,
            library.c.game_id,
            User.username,
            Game.title,
            Game.release_date,
            Game.price,
        )
        .join(User, User.id == library.c.user_id)
        .join(Game, Game.id == library.c.game_id)
        .all()
    )

    libraries = [
        {
            "user_id": user_id,
            "game_id": game_id,
            "username": username,
            "game_title": title,
            "release_date": release_date,
            "price": price,
        }
        for user_id, game_id, username, title, release_date, price in library_entries
    ]

    return libraries, 200


# get current user's library
@library_routes.route("/user", methods=["GET"])
@login_required
def get_user_library():
    library_entries = (
        db.session.query(
            library.c.user_id,
            library.c.game_id,
            User.username,
            Game.title,
            Game.release_date,
            Game.price,
        )
        .join(User, User.id == library.c.user_id)
        .join(Game, Game.id == library.c.game_id)
        .filter(library.c.user_id == current_user.id)
        .all()
    )

    libraries = [
        {
            "user_id": user_id,
            "game_id": game_id,
            "username": username,
            "game_title": title,
            "release_date": release_date,
            "price": price,
        }
        for user_id, game_id, username, title, release_date, price in library_entries
    ]

    return libraries, 200
