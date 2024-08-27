from flask import Blueprint
from app.models import Review


review_routes = Blueprint("reviews", __name__)


@review_routes.route("/all", methods=["GET"])
def get_reviews():
    reviews = Review.query.all()
    return [review.to_dict() for review in reviews], 200
