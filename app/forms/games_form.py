from flask_wtf import FlaskForm
from wtforms import StringField, DecimalField, DateField, ValidationError
from wtforms.validators import DataRequired, Length, NumberRange
from app.api.aws_helpers import ALLOWED_EXTENSIONS
from app.models import Game


def title_exists(form, field):
    # Checking if title is already in use
    title = field.data
    game = Game.query.filter(Game.title == title).first()
    if game:
        raise ValidationError("Game title is already in use")


class GameForm(FlaskForm):
    title = StringField(
        "title",
        validators=[
            DataRequired(),
            title_exists,
            Length(min=4, max=40, message="Name must be between 4 and 40 characters"),
        ],
    )
    price = DecimalField(
        "price",
        places=2,
        validators=[
            DataRequired(),
            NumberRange(min=0, max=999, message="Price must be between 0 and 999.99"),
        ],
    )
    release_date = DateField(
        "release_date", format="%Y-%m-%d", validators=[DataRequired()]
    )
    min_requirements = StringField("min_requirements", validators=[DataRequired()])
    min_os = StringField("min_os", validators=[DataRequired()])
    min_processor = StringField("min_processor", validators=[DataRequired()])
    min_memory = StringField("min_memory", validators=[DataRequired()])
    min_graphics = StringField("min_graphics", validators=[DataRequired()])
    min_directx = StringField("min_directx", validators=[DataRequired()])
    min_storage = StringField("min_storage", validators=[DataRequired()])
    min_sound_card = StringField("min_sound_card", validators=[DataRequired()])
    min_additional_notes = StringField(
        "min_additional_notes", validators=[DataRequired()]
    )
    rec_requirements = StringField("rec_requirements", validators=[DataRequired()])
    rec_os = StringField("rec_os", validators=[DataRequired()])
    rec_processor = StringField("rec_processor", validators=[DataRequired()])
    rec_memory = StringField("rec_memory", validators=[DataRequired()])
    rec_graphics = StringField("rec_graphics", validators=[DataRequired()])
    rec_directx = StringField("rec_directx", validators=[DataRequired()])
    rec_storage = StringField("rec_storage", validators=[DataRequired()])
    rec_sound_card = StringField("rec_sound_card", validators=[DataRequired()])
    rec_additional_notes = StringField(
        "rec_additional_notes", validators=[DataRequired()]
    )
