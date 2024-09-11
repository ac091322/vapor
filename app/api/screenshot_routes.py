from flask import Blueprint, request
from flask_login import login_required
from app.api.s3_helpers import upload_file_to_s3, remove_file_from_s3
from app.models import db, Screenshot


screenshot_routes = Blueprint("screenshots", __name__)


# get all screenshots
@screenshot_routes.route("/all", methods=["GET"])
def get_all_screenshots():
    screenshots = Screenshot.query.all()
    return [screenshot.to_dict() for screenshot in screenshots], 200


# upload screenshots through game_id
@screenshot_routes.route("/post", methods=["POST"])
@login_required
def upload_screenshot():
    game_id = request.form.get("game_id")
    files = request.files.getlist("screenshot_url")

    if files:
        urls = []
        for file in files:
            filename = file.filename
            upload = upload_file_to_s3(file)
            url = upload["url"]

            new_screenshot = Screenshot(
                screenshot_url=url, game_id=game_id, filename=filename
            )

            db.session.add(new_screenshot)
            db.session.commit()
            urls.append(url)

        return {"urls": urls}, 201

    return {"error": "No files uploaded"}, 400


# delete screenshot by screenshot id
@screenshot_routes.route("/<int:screenshot_id>/delete", methods=["DELETE"])
@login_required
def delete_screenshot(screenshot_id):
    screenshot = Screenshot.query.get(screenshot_id)
    if screenshot is None:
        return {"error": "Screenshot not found"}, 404

    s3_response = remove_file_from_s3(screenshot.screenshot_url)
    if s3_response != True:
        return {"error": "Failed to delete file from S3"}, 500

    db.session.delete(screenshot)
    db.session.commit()

    return {"message": "Screenshot deleted"}, 200
