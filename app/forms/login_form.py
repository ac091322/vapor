from flask_wtf import FlaskForm
from wtforms import StringField, EmailField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # checking if user exists
    email = field.data.lower()
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError("Email provided not found")


def password_matches(form, field):
    # checking if password matches
    password = field.data
    email = form.data["email"]
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError("No such user exists")
    if not user.check_password(password):
        raise ValidationError("Password incorrect")


class LoginForm(FlaskForm):
    email = EmailField(
        "Email",
        validators=[DataRequired(), Email(message="Invalid email & "), user_exists],
    )
    password = StringField("Password", validators=[DataRequired(), password_matches])
