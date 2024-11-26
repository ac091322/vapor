from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed, FileRequired
from wtforms import SubmitField, IntegerField
from wtforms.validators import DataRequired
from app.api.s3_helpers import ALLOWED_EXTENSIONS


class CoverArtForm(FlaskForm):
    screenshot_url = FileField(
        "Screenshot file",
        validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))],
    )
    game_id = IntegerField("Game ID", validators=[DataRequired()])
