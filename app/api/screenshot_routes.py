from flask import Blueprint
from app.models import Screenshot


screenshot_routes = Blueprint("screenshots", __name__)


@screenshot_routes.route("/all", methods=["GET"])
def get_all_screenshots():
    screenshots = Screenshot.query.all()
    return [screenshot.to_dict() for screenshot in screenshots], 200
