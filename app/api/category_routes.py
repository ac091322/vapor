from flask import Blueprint
from app.models import Category


category_routes = Blueprint("categories", __name__)


# get all categories
@category_routes.route("/all", methods=["GET"])
def get_all_categories():
    categories = Category.query.all()
    return [category.to_dict() for category in categories], 200
