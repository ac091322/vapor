from .db import db, environment, SCHEMA
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .wishlist_joined import wishlist_joined
from .library_joined import library_joined


class User(db.Model, UserMixin):
    __tablename__ = "users"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), nullable=False, unique=True)
    email = db.Column(db.String(40), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    avatar = db.Column(db.String(255), nullable=True)
    about = db.Column(db.String(2000), nullable=True)

    # many-to-many relationships:
    game_in_wishlist_joined = db.relationship(
        "Game",
        secondary=wishlist_joined,
        back_populates="user_in_wishlist_joined",
        passive_deletes=True,
    )
    game_in_library_joined = db.relationship(
        "Game",
        secondary=library_joined,
        back_populates="user_in_library_joined",
        passive_deletes=True,
    )

    # one-to-many relationships:
    game = db.relationship("Game", back_populates="user", cascade="all, delete-orphan")
    review = db.relationship("Review", back_populates="user")

    # one-to-one relationship
    shopping_cart = db.relationship("ShoppingCart", back_populates="user")

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
            "shopping_cart": self.shopping_cart if self.shopping_cart else None,
        }
