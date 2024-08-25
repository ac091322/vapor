from flask import Blueprint
from flask_login import current_user, login_required
from app.models import ShoppingCart


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
def get_shopping_cart_of_user():
    shopping_cart = ShoppingCart.query.filter_by(user_id=current_user.id).first()
    return shopping_cart.to_dict(), 200
