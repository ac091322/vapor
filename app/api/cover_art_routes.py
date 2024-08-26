from flask import Blueprint, request
from app.models import db, CoverArt
from flask_login import login_required
from app.api.s3_helpers import upload_file_to_s3, get_unique_filename

# import re


cover_art_routes = Blueprint("images", __name__)


# def to_snake_case(name):
#     name = re.sub(r"[^a-zA-Z0-9]+", "_", name)
#     return name.lower().strip("_")


@cover_art_routes.route("/post", methods=["POST"])
@login_required
def upload_image():
    cover_art_url = request.files.get("cover_art_url")
    game_id = request.form.get("game_id")

    if not game_id:
        return {"errors": ["game_id is required"]}, 400

    # game = Game.query.get(game_id)
    # if not game:
    # return {"errors": ["Invalid game_id"]}, 400

    # folder_name = to_snake_case(game.name)

    if cover_art_url:
        cover_art_url.filename = get_unique_filename(cover_art_url.filename)
        # image.filename = f"{folder_name}/{get_unique_filename(image.filename)}"
        upload = upload_file_to_s3(cover_art_url)
        print(upload)

        if "url" not in upload:
            return {"errors": [upload]}, 400

        url = upload["url"]
        new_cover_art = CoverArt(cover_art_url=url, game_id=game_id)
        db.session.add(new_cover_art)
        db.session.commit()
        return {"url": url}, 200

    return {"errors": ["No file uploaded"]}, 400
