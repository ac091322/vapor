from flask import Blueprint, request
from flask_login import current_user, login_required
from app.models import db, Game
from app.forms import GameForm


game_routes = Blueprint("games", __name__)


# get all games
# create new game
@game_routes.route("/", methods=["GET", "POST"])
def games():
    if request.method == "POST":
        if not current_user.is_authenticated:
            return {"error": "User not authenticated"}, 401

        form = GameForm()
        form["csrf_token"].data = request.cookies["csrf_token"]

        if form.validate_on_submit():
            new_game = Game(
                title=form.data["title"],
                user_id=current_user.id,
                price=form.data["price"],
                release_date=form.data["release_date"],
                cover_art=form.data["cover_art"],
                min_requirements=form.data["min_requirements"],
                min_os=form.data["min_os"],
                min_processor=form.data["min_processor"],
                min_memory=form.data["min_memory"],
                min_graphics=form.data["min_graphics"],
                min_directx=form.data["min_directx"],
                min_storage=form.data["min_storage"],
                min_sound_card=form.data["min_sound_card"],
                min_additional_notes=form.data["min_additional_notes"],
                rec_requirements=form.data["rec_requirements"],
                rec_os=form.data["rec_os"],
                rec_processor=form.data["rec_processor"],
                rec_memory=form.data["rec_memory"],
                rec_graphics=form.data["rec_graphics"],
                rec_directx=form.data["rec_directx"],
                rec_storage=form.data["rec_storage"],
                rec_sound_card=form.data["rec_sound_card"],
                rec_additional_notes=form.data["rec_additional_notes"],
            )
            db.session.add(new_game)
            db.session.commit()
            return new_game.to_dict(), 201

        return {"errors": form.errors}, 409

    else:
        games = Game.query.all()
        return [game.to_dict() for game in games], 200
