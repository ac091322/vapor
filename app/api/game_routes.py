from flask import Blueprint, request
from flask_login import current_user, login_required
from app.models import db, Game
from app.forms import GameForm


game_routes = Blueprint("games", __name__)


# get all games
@game_routes.route("/", methods=["GET"])
def get_games():
    games = Game.query.all()
    return [game.to_dict() for game in games], 200


# get game by game_id
# delete game by game_id
@game_routes.route("/<int:game_id>", methods=["GET", "DELETE"])
def get_game_id(game_id):
    game = Game.query.get(game_id)

    if request.method == "DELETE":
        if not current_user.is_authenticated:
            return {"error": "User not authenticated"}, 401

        if game is None:
            return {"error": "Game not found"}, 404

        if game.user_id != current_user.id:
            return {"error": "Forbidden"}, 403

        db.session.delete(game)
        db.session.commit()
        return {"message": "Game deleted"}, 200

    else:
        if game is None:
            return {"error": "Game not found"}, 404
        return game.to_dict(), 200


# create new game
@game_routes.route("/", methods=["POST"])
@login_required
def post_game():
    form = GameForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        new_game = Game(
            title=form.data["title"],
            user_id=current_user.id,
            price=form.data["price"],
            release_date=form.data["release_date"],
            description=form.data["description"],
            min_requirements=form.data["min_requirements"],
            min_os=form.data["min_os"],
            min_processor=form.data["min_processor"],
            min_memory=form.data["min_memory"],
            min_graphics=form.data["min_graphics"],
            min_directx=form.data["min_directx"],
            min_storage=form.data["min_storage"],
            min_sound_card=form.data["min_sound_card"],
        )
        db.session.add(new_game)
        db.session.commit()
        return new_game.to_dict(), 201

    return {"errors": form.errors}, 409
