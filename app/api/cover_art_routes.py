from flask import Blueprint, request
from app.models import db, CoverArt
from flask_login import login_required
from app.api.s3_helpers import upload_file_to_s3


cover_art_routes = Blueprint("images", __name__)


# create cover_art through game_id
@cover_art_routes.route("/post", methods=["POST"])
@login_required
def upload_cover_art():
    game_id = request.form.get("game_id")

    cover_art_url = request.files.get("cover_art_url")
    filename = request.form.get("filename")

    if cover_art_url:
        cover_art_url.filename = filename
        upload = upload_file_to_s3(cover_art_url)

        url = upload["url"]
        new_cover_art = CoverArt(cover_art_url=url, game_id=game_id, filename=filename)

        db.session.add(new_cover_art)
        db.session.commit()
        return {"url": url}, 201

    return {"error": "No file uploaded"}, 400


# edit cover_art by cover_art_id
@cover_art_routes.route("/<int:cover_art_id>/put", methods=["PUT"])
@login_required
def edit_cover_art(cover_art_id):
    cover_art = CoverArt.query.get(cover_art_id)

    if not cover_art:
        return {"error": "Cover art not found"}

    cover_art_url = request.files.get("cover_art_url")
    filename = request.form.get("filename")

    if cover_art_url:
        cover_art_url.filename = filename
        upload = upload_file_to_s3(cover_art_url)

        cover_art.cover_art_url = upload["url"]

        if filename:
            cover_art.filename = filename

        db.session.commit()
        return {"message": "Cover art updated"}, 200

    return {"error": "No file uploaded"}, 400
