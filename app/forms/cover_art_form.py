from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed, FileRequired
from wtforms import SubmitField, IntegerField
from wtforms.validators import DataRequired
from app.api.s3_helpers import ALLOWED_EXTENSIONS


class CoverArtForm(FlaskForm):
    cover_art_url = FileField(
        "Cover art file",
        validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))],
    )
    game_id = IntegerField("Game ID", validators=[DataRequired()])
    submit = SubmitField("Upload cover art")


"""
If you are using templating in your application, you will want to make a minor change to the form in the template file, making sure you have set the encryption type on the form as follows:

<form action="/posts/new" method="POST" enctype="multipart/form-data">
"""

"""
For the purposes of this tutorial, let's assume that there is a Post model in the database with a column for an image URL. After successfully uploading the image to an S3 bucket, the application should store the S3 URL of the uploaded file in the database as the image URL column value for a Post. The following example is a route set up to work with Jinja templating:

from flask import Blueprint, request
from app.models import db, Image
from flask_login import current_user, login_required
from app.s3_helpers import (
    upload_file_to_s3, get_unique_filename)

image_routes = Blueprint("images", __name__)


@image_routes.route("", methods=["POST"])
@login_required
def upload_image():
    form = ImageForm()

    if form.validate_on_submit():

        image = form.data["image"]
        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)
        print(upload)

        if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when you tried to upload
        # so you send back that error message (and you printed it above)
            return render_template("post_form.html", form=form, errors=[upload])

        url = upload["url"]
        new_image = Post(image= url)
        db.session.add(new_image)
        db.session.commit()
        return redirect("/posts/all")

    if form.errors:
        print(form.errors)
        return render_template("post_form.html", form=form, errors=form.errors)

    return render_template("post_form.html", form=form, errors=None)
"""
