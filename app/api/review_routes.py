from flask import Blueprint, request
from app.models import db, Review
from flask_login import current_user, login_required
from app.models import db, Review
# from app.forms import ReviewForm


review_routes = Blueprint("reviews", __name__)


# get all reviews
@review_routes.route("/all", methods=["GET"])
def get_reviews():
    reviews = Review.query.all()
    return [review.to_dict() for review in reviews], 200


# delete review by review_id
@review_routes.route("/<int:review_id>/delete", methods=["DELETE"])
@login_required
def delete_review(review_id):
    review = Review.query.get(review_id)

    if review is None:
        return {"error": "Review not found"}, 404

    if review.user_id != current_user.id:
        return {"error": "Forbidden"}, 403

    db.session.delete(review)
    db.session.commit()
    return {"message": "Review deleted"}, 200
