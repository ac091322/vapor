from flask_wtf import FlaskForm
from wtforms import StringField, DecimalField, DateField, TextAreaField, ValidationError
from wtforms.validators import DataRequired, Length, NumberRange
from app.models import Game


def title_exists(form, field):
    # Checking if title is already in use
    title = field.data
    game = Game.query.filter(Game.title == title).first()
    if game:
        raise ValidationError("Game title is already in use.")


class GameForm(FlaskForm):
    title = StringField(
        "title",
        validators=[
            DataRequired(),
            title_exists,
            Length(min=4, max=40, message="Name must be between 4 and 40 characters."),
        ],
    )
    price = DecimalField(
        "price",
        places=2,
        validators=[
            DataRequired(),
            NumberRange(min=0, max=999, message="Price must be between 0 and 999.99."),
        ],
    )
    release_date = DateField(
        "release_date", format="%Y-%m-%d", validators=[DataRequired()]
    )
    description = TextAreaField(
        "description", validators=[DataRequired(), Length(min=10, max=2000)]
    )
    min_requirements = StringField(
        "min_requirements", validators=[DataRequired(), Length(max=255)]
    )
    min_os = StringField("min_os", validators=[DataRequired(), Length(max=255)])
    min_processor = StringField(
        "min_processor", validators=[DataRequired(), Length(max=255)]
    )
    min_memory = StringField("min_memory", validators=[DataRequired(), Length(max=255)])
    min_graphics = StringField(
        "min_graphics", validators=[DataRequired(), Length(max=255)]
    )
    min_directx = StringField(
        "min_directx", validators=[DataRequired(), Length(max=255)]
    )
    min_storage = StringField(
        "min_storage", validators=[DataRequired(), Length(max=255)]
    )
    min_sound_card = StringField(
        "min_sound_card", validators=[DataRequired(), Length(max=255)]
    )
