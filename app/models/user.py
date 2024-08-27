from .db import db, environment, SCHEMA
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .wishlist import wishlist
from .library import library


class User(db.Model, UserMixin):
    __tablename__ = "users"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(60), nullable=False, unique=True)
    email = db.Column(db.String(60), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    developer_name = db.Column(db.String(60), nullable=True)
    avatar = db.Column(db.String(255), nullable=True)
    about = db.Column(db.String(2000), nullable=True)

    # many-to-many relationships:
    game_in_wishlist = db.relationship(
        "Game",
        secondary=wishlist,
        back_populates="user_in_wishlist",
        passive_deletes=True,
    )
    game_in_library = db.relationship(
        "Game",
        secondary=library,
        back_populates="user_in_library",
        passive_deletes=True,
    )

    # one-to-many relationships:
    game = db.relationship("Game", back_populates="user", cascade="all, delete-orphan")
    review = db.relationship("Review", back_populates="user")

    # one-to-one relationship
    shopping_cart = db.relationship(
        "ShoppingCart", back_populates="user", cascade="all, delete-orphan"
    )

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "avatar": self.avatar,
            "about": self.about,
            "reviews": (
                [reviews.to_dict() for reviews in self.review] if self.review else None
            ),
            "shopping_cart": (
                [shopping_cart.to_dict() for shopping_cart in self.shopping_cart]
                if self.shopping_cart
                else None
            ),
            "games_in_wishlist": (
                [
                    {"title": game.title, "game_id": game.id}
                    for game in self.game_in_wishlist
                ]
                if self.game_in_wishlist
                else None
            ),
            "games_in_library": (
                [
                    {"title": game.title, "game_id": game.id}
                    for game in self.game_in_library
                ]
                if self.game_in_library
                else None
            ),
        }
