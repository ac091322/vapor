from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db, wishlist, Game, User, CoverArt


wishlist_routes = Blueprint("wishlists", __name__)


# get all wishlists
@wishlist_routes.route("/all", methods=["GET"])
@login_required
def get_wishlists():
    wishlist_entries = (
        db.session.query(
            wishlist.c.user_id,
            wishlist.c.game_id,
            User.username,
            Game.title,
            Game.release_date,
            Game.price,
            # Game.cover_art,
        )
        # .distinct(wishlist.c.game_id)
        .join(User, User.id == wishlist.c.user_id)
        .join(Game, Game.id == wishlist.c.game_id)
        .all()
    )

    wishlists = [
        {
            "user_id": user_id,
            "game_id": game_id,
            "username": username,
            "game_title": title,
            "release_date": release_date,
            "price": price,
            # "cover_art": cover_art,
        }
        for user_id, game_id, username, title, release_date, price in wishlist_entries
    ]

    return wishlists, 200


# get current user's wishlist
@wishlist_routes.route("/user", methods=["GET"])
@login_required
def get_user_wishlist():
    wishlist_entries = (
        db.session.query(
            wishlist.c.user_id,
            wishlist.c.game_id,
            User.username,
            Game.title,
            Game.release_date,
            Game.price,
            Game.cover_art,
        )
        .distinct(wishlist.c.game_id)  # Add distinct here
        .join(User, User.id == wishlist.c.user_id)
        .join(Game, Game.id == wishlist.c.game_id)
        .outerjoin(CoverArt, CoverArt.game_id == Game.id)
        .filter(wishlist.c.user_id == current_user.id)
        .all()
    )

    wishlists = [
        {
            "user_id": user_id,
            "game_id": game_id,
            "username": username,
            "game_title": title,
            "release_date": release_date,
            "price": price,
            "cover_art_url": cover_art,
        }
        for user_id, game_id, username, title, release_date, price, cover_art in wishlist_entries
    ]

    return wishlists, 200


@wishlist_routes.route("/<int:game_id>/delete", methods=["DELETE"])
@login_required
def remove_game_from_wishlist(game_id):
    game = Game.query.get(game_id)
    if game is None:
        return {"error": "Game not found"}, 404

    game_in_wishlist = (
        db.session.query(wishlist)
        .filter(wishlist.c.user_id == current_user.id, wishlist.c.game_id == game_id)
        .first()
    )
    if not game_in_wishlist:
        return {"error": "Game not in wishlist"}, 404

    db.session.query(wishlist).filter(
        wishlist.c.user_id == current_user.id,
        wishlist.c.game_id == game_id,
    ).delete(synchronize_session=False)

    db.session.commit()
    return {"message": "Game removed from wishlist"}, 200
