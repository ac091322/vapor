from flask import Blueprint, request
from app.models import db, Image
from flask_login import login_required
from app.api.s3_helpers import upload_file_to_s3, get_unique_filename


s3_routes = Blueprint("images", __name__)


@s3_routes.route("/new", methods=["POST"])
@login_required
def upload_image():
    print("!!!!!!*******!!!!!!", request.files)
    image = request.files.get("image")

    if image:
        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)
        print(upload)

        if "url" not in upload:
            return {"errors": [upload]}, 400

        url = upload["url"]
        new_image = Image(image=url)
        db.session.add(new_image)
        db.session.commit()
        return {"url": url}, 200

    return {"errors": ["No file uploaded"]}, 400
