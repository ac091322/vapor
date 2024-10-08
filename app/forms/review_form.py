from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField
from wtforms.validators import DataRequired, Length
from app.models import Review


class ReviewForm(FlaskForm):
    thumbs_up = BooleanField("Thumbs up")
    thumbs_down = BooleanField("Thumbs down")
    description = StringField(
        "Description",
        validators=[
            DataRequired(),
            Length(min=10, max=2000, message="Must be between 10 and 2,000 characters"),
        ],
    )
