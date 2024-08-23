from flask import Blueprint, request, render_template, redirect
from app.models import db, Image
from flask_login import login_required
from app.api.s3_helpers import upload_file_to_s3, get_unique_filename
from app.forms import ImageForm


s3_routes = Blueprint("images", __name__)


# @s3_routes.route("/new", methods=["POST"])
# @login_required
# def upload_image():
#     form = ImageForm()
#     # form["csrf_token"].data = request.cookies["csrf_token"]

#     if form.validate_on_submit():
#         image = form.data["image"]
#         image.filename = get_unique_filename(image.filename)
#         upload = upload_file_to_s3(image)
#         print(upload)

#         if "url" not in upload:
#             # if the dictionary doesn't have a url key
#             # it means that there was an error when you tried to upload
#             # so you send back that error message (and you printed it above)
#             return render_template("post_form.html", form=form, errors=[upload]), 400

#         url = upload["url"]
#         new_image = Image(image=url)
#         db.session.add(new_image)
#         db.session.commit()
#         return redirect("/posts/all"), 201

#     if form.errors:
#         print(form.errors)
#         return render_template("post_form.html", form=form, errors=form.errors), 400

#     return render_template("post_form.html", form=form, errors=None), 400


# @s3_routes.route("/new", methods=["POST"])
# @login_required
# def upload_image():
#     if request.is_json:
#         return {"error": "Invalid request type"}, 400

#     form = ImageForm()
#     form["csrf_token"].data = request.cookies["csrf_token"]

#     if form.validate_on_submit():
#         image = form.image.data  # Access the file data from the form
#         image.filename = get_unique_filename(image.filename)
#         upload = upload_file_to_s3(image)

#         if "url" not in upload:
#             return {"errors": [upload["errors"]]}, 400

#         url = upload["url"]
#         new_image = Image(image=url)
#         db.session.add(new_image)
#         db.session.commit()
#         return {"url": url}, 200

#     return {"errors": form.errors}, 400


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
