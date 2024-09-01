from flask import Blueprint, request
from flask_login import current_user, login_required
from app.models import db, Game, Review, ShoppingCart
from app.forms import GameForm, ReviewForm
from datetime import datetime


game_routes = Blueprint("games", __name__)


# get all games
@game_routes.route("/all", methods=["GET"])
def get_games():
    games = Game.query.all()
    return [game.to_dict() for game in games], 200


# get game by game_id
@game_routes.route("/<int:game_id>/get", methods=["GET", "DELETE"])
def get_game(game_id):
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
@game_routes.route("/post", methods=["POST"])
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


# edit game by game_id
@game_routes.route("/<int:game_id>/put", methods=["PUT"])
@login_required
def edit_game(game_id):
    game = Game.query.get(game_id)
    if game is None:
        return {"error": "Game not found"}, 404

    if game.user_id != current_user.id:
        return {"error": "Forbidden"}, 403

    form = GameForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    data = request.json

    if form.validate_on_submit():
        release_date_str = data.get("release_date", game.release_date)
        if isinstance(release_date_str, str):
            release_date = datetime.strptime(release_date_str, "%Y-%m-%d").date()

        game.title = data.get("title", game.title)
        game.price = data.get("price", game.price)
        game.release_date = release_date
        game.description = data.get("description", game.description)
        game.min_requirements = data.get("min_requirements", game.min_requirements)
        game.min_os = data.get("min_os", game.min_os)
        game.min_processor = data.get("min_processor", game.min_processor)
        game.min_memory = data.get("min_memory", game.min_memory)
        game.min_graphics = data.get("min_graphics", game.min_graphics)
        game.min_directx = data.get("min_directx", game.min_directx)
        game.min_storage = data.get("min_storage", game.min_storage)
        game.min_sound_card = data.get("min_sound_card", game.min_sound_card)

        db.session.commit()
        return game.to_dict(), 200

    return {"errors": form.errors}, 400


# delete game by game_id
@game_routes.route("/<int:game_id>/delete", methods=["DELETE"])
@login_required
def delete_game(game_id):
    game = Game.query.get(game_id)
    if game is None:
        return {"error": "Game not found"}, 404

    if game.user_id != current_user.id:
        return {"error": "Forbidden"}, 403

    db.session.delete(game)
    db.session.commit()
    return {"message": "Game deleted"}, 200


# get reviews by game_id
@game_routes.route("/<int:game_id>/reviews", methods=["GET"])
def get_game_reviews(game_id):
    game = Game.query.get(game_id)
    reviews = game.review
    return [review.to_dict() for review in reviews], 200


# post a review by game_id
@game_routes.route("/<int:game_id>/review/post", methods=["POST"])
@login_required
def post_review(game_id):
    game = Game.query.get(game_id)
    if game is None:
        return {"error": "Game not found"}, 404

    if game.user_id == current_user.id:
        return {"error": "Cannot review your own game"}, 403

    exiting_review = Review.query.filter_by(
        game_id=game_id, user_id=current_user.id
    ).first()
    if exiting_review:
        return {"error": "You already reviewed this game"}, 409

    form = ReviewForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        new_review = Review(
            thumbs_up=form.data["thumbs_up"],
            thumbs_down=form.data["thumbs_down"],
            description=form.data["description"],
            user_id=current_user.id,
            game_id=game_id,
        )
        db.session.add(new_review)
        db.session.commit()
        return new_review.to_dict(), 201

    return {"errors": form.errors}, 400


# add game to current user's wishlist by game_id
@game_routes.route("/<int:game_id>/user/wishlist/post", methods=["POST"])
@login_required
def add_game_to_wishlist(game_id):
    game = Game.query.get(game_id)
    if game is None:
        return {"error": "Game not found"}, 404

    if game.user_id == current_user.id:
        return {"error": "Forbidden"}, 403

    if game in current_user.game_in_wishlist:
        return {"error": "Game already in wishlist"}, 409

    current_user.game_in_wishlist.append(game)
    db.session.commit()
    return {"message": "Game added to wishlist"}, 201


# add game to current user's shopping cart by ganme_id and shopping_card_id
@game_routes.route(
    "/<int:game_id>/<int:shopping_cart_id>/user/shopping-cart/post", methods=["POST"]
)
@login_required
def add_game_to_shopping_cart(game_id, shopping_cart_id):
    shopping_cart = ShoppingCart.query.get(shopping_cart_id)
    if shopping_cart is None:
        return {"error": "Shopping cart not found"}, 404

    game = Game.query.get(game_id)
    if game is None:
        return {"error": "Game not found"}, 404

    if shopping_cart_id != current_user.id:
        return {"error": "Forbidden"}, 403

    if game in shopping_cart.game_in_shopping_cart_item:
        return {"error": "Game already in shopping cart"}, 409

    shopping_cart.game_in_shopping_cart_item.append(game)
    db.session.commit()

    return {"message": "Game added to shopping cart"}, 201
