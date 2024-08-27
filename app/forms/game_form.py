from flask_wtf import FlaskForm
from wtforms import (
    StringField,
    DecimalField,
    DateField,
    TextAreaField,
    ValidationError,
    HiddenField,
)
from wtforms.validators import DataRequired, Length, NumberRange
from app.models import Game


class GameForm(FlaskForm):
    title = StringField(
        "Title",
        validators=[
            DataRequired(),
            Length(min=4, max=40, message="Title must be between 4 and 40 characters"),
        ],
    )
    price = DecimalField(
        "Price",
        places=2,
        validators=[
            DataRequired(),
            NumberRange(min=0, max=999, message="Price must be between 0 and 999.99"),
        ],
    )
    release_date = DateField(
        "Release date", format="%Y-%m-%d", validators=[DataRequired()]
    )
    description = TextAreaField(
        "Description", validators=[DataRequired(), Length(min=10, max=2000)]
    )
    min_requirements = StringField(
        "Mininum requirements", validators=[DataRequired(), Length(min=4, max=255)]
    )
    min_os = StringField("min_os", validators=[DataRequired(), Length(min=4, max=255)])
    min_processor = StringField(
        "Mininum processor", validators=[DataRequired(), Length(min=4, max=255)]
    )
    min_memory = StringField("min_memory", validators=[DataRequired(), Length(max=255)])
    min_graphics = StringField(
        "Mininum graphics", validators=[DataRequired(), Length(min=4, max=255)]
    )
    min_directx = StringField(
        "Mininum directx", validators=[DataRequired(), Length(min=4, max=255)]
    )
    min_storage = StringField(
        "Mininum storage", validators=[DataRequired(), Length(min=4, max=255)]
    )
    min_sound_card = StringField(
        "Mininum sound_card", validators=[DataRequired(), Length(max=255)]
    )
