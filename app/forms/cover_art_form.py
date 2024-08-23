from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed, FileRequired
from wtforms import SubmitField
from app.api.aws_helpers import ALLOWED_EXTENSIONS


class CoverArtForm(FlaskForm):
    cover_art = FileField(
        "image_file", validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))]
    )
