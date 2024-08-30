from flask_wtf import FlaskForm
from wtforms import StringField, EmailField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User


def user_exists(form, field):
    # checking if user exists
    email = field.data.lower()
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError("Email address is already in use")


def username_exists(form, field):
    # checking if username is already in use
    username = field.data.lower()
    # user = User.query.filter(User.username == username).first()
    user = User.query.filter(User.username.ilike(username)).first()
    if user:
        raise ValidationError("Developer name is already in use")


class SignUpForm(FlaskForm):
    username = StringField(
        "Developer name",
        validators=[
            DataRequired(),
            username_exists,
            Length(min=2, max=60, message="Must be between 2 and 60 characters"),
        ],
    )
    email = EmailField(
        "Email",
        validators=[
            DataRequired(),
            Email(message="Invalid email address"),
            user_exists,
            Length(min=5, max=60, message="Must be between 5 and 60 characters"),
        ],
    )
    password = StringField(
        "password",
        validators=[
            DataRequired(),
            Length(min=4, max=255, message="Must be between 4 and 255 characters"),
        ],
    )
