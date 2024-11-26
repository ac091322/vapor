from flask import Blueprint
from flask_login import current_user, login_required
from app.models import db, ShoppingCart, shopping_cart_item, Game


shopping_cart_routes = Blueprint("shopping_carts", __name__)


# get all shopping carts
@shopping_cart_routes.route("/all", methods=["GET"])
@login_required
def get_all_shopping_carts():
    shopping_carts = ShoppingCart.query.all()
    return [shopping_cart.to_dict() for shopping_cart in shopping_carts], 200


# get shopping cart by user_id
@shopping_cart_routes.route("/user", methods=["GET"])
@login_required
def get_current_user_shopping_cart():
    shopping_cart = ShoppingCart.query.filter_by(user_id=current_user.id).first()
    return shopping_cart.to_dict(), 200


# get games in current user's shopping cart by shopping_cart_id
@shopping_cart_routes.route("/<int:shopping_cart_id>/user", methods=["GET"])
@login_required
def get_games_in_shopping_cart(shopping_cart_id):
    shopping_cart_entries = (
        db.session.query(
            shopping_cart_item.c.shopping_cart_id,
            shopping_cart_item.c.game_id,
            Game.title,
            Game.release_date,
            Game.price,
            shopping_cart_item.c.created_at,
            shopping_cart_item.c.updated_at,
        )
        .join(Game, Game.id == shopping_cart_item.c.game_id)
        .join(ShoppingCart, ShoppingCart.id == shopping_cart_item.c.shopping_cart_id)
        .filter(shopping_cart_item.c.shopping_cart_id == shopping_cart_id)
        .all()
    )

    user_shopping_cart = [
        {
            "shopping_cart_id": shopping_cart_id,
            "game_id": game_id,
            "game_title": title,
            "release_date": release_date,
            "price": price,
            "created_at": created_at,
            "updated_at": updated_at,
        }
        for shopping_cart_id, game_id, title, release_date, price, created_at, updated_at in shopping_cart_entries
    ]

    return user_shopping_cart, 200


# remove game from current user's shopping cart by game_id and shopping_cart_id
@shopping_cart_routes.route(
    "/<int:shopping_cart_id>/<int:game_id>/user/delete", methods=["DELETE"]
)
@login_required
def remove_game_from_shopping_cart(shopping_cart_id, game_id):
    shopping_cart = ShoppingCart.query.get(shopping_cart_id)
    if shopping_cart is None:
        return {"error": "Shopping cart not found"}, 404

    game = Game.query.get(game_id)
    if game is None:
        return {"error": "Game not found"}, 404

    if shopping_cart_id != current_user.id:
        return {"error": "Forbidden"}, 403

    if not game in shopping_cart.game_in_shopping_cart_item:
        return {"error": "Game not in shopping cart"}, 404

    db.session.query(shopping_cart_item).filter(
        shopping_cart_item.c.shopping_cart_id == current_user.id,
        shopping_cart_item.c.game_id == game_id,
    ).delete(synchronize_session=False)

    db.session.commit()
    return {"message": "Game removed from shopping cart"}, 200
