from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime, timezone
from .game_category import game_category
from .wishlist import wishlist
from .library import library
from .shopping_cart_item import shopping_cart_item


class Game(db.Model):
    __tablename__ = "games"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(40), nullable=False)
    user_id = db.Column(
        db.ForeignKey(add_prefix_for_prod("users.id"), ondelete="CASCADE"),
        nullable=False,
    )
    price = db.Column(db.Numeric(5, 2), nullable=False)
    release_date = db.Column(db.Date, nullable=False)
    description = db.Column(db.String(2000), nullable=False)
    min_requirements = db.Column(db.String(100), nullable=False)
    min_os = db.Column(db.String(255), nullable=False)
    min_processor = db.Column(db.String(100), nullable=False)
    min_memory = db.Column(db.String(100), nullable=False)
    min_graphics = db.Column(db.String(100), nullable=False)
    min_directx = db.Column(db.String(100), nullable=False)
    min_storage = db.Column(db.String(100), nullable=False)
    min_sound_card = db.Column(db.String(100), nullable=False)
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(tz=timezone.utc))
    updated_at = db.Column(
        db.DateTime,
        default=lambda: datetime.now(tz=timezone.utc),
        onupdate=lambda: datetime.now(tz=timezone.utc),
    )

    # many-to-many relationships:
    category_in_game_category = db.relationship(
        "Category",
        secondary=game_category,
        back_populates="game_in_game_category",
        passive_deletes=True,
    )
    user_in_wishlist = db.relationship(
        "User",
        secondary=wishlist,
        back_populates="game_in_wishlist",
        passive_deletes=True,
    )
    user_in_library = db.relationship(
        "User",
        secondary=library,
        back_populates="game_in_library",
        passive_deletes=True,
    )
    shopping_cart_in_shopping_cart_item = db.relationship(
        "ShoppingCart",
        secondary=shopping_cart_item,
        back_populates="game_in_shopping_cart_item",
        passive_deletes=True,
    )

    # many-to-one relationships:
    user = db.relationship("User", back_populates="game")

    # one-to-many relationship:
    screenshot = db.relationship(
        "Screenshot", back_populates="game", cascade="all, delete-orphan"
    )
    review = db.relationship(
        "Review", back_populates="game", cascade="all, delete-orphan"
    )

    # one-to-one relationships
    cover_art = db.relationship(
        "CoverArt", back_populates="game", cascade="all, delete-orphan"
    )
    trailer = db.relationship(
        "Trailer", back_populates="game", cascade="all, delete-orphan"
    )

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "price": self.price,
            "release_date": self.release_date,
            "description": self.description,
            "min_requirements": self.min_requirements,
            "min_os": self.min_os,
            "min_processor": self.min_processor,
            "min_memory": self.min_memory,
            "min_graphics": self.min_graphics,
            "min_directx": self.min_directx,
            "min_storage": self.min_storage,
            "min_sound_card": self.min_sound_card,
            "user": (
                {"user_id": self.user.id, "username": self.user.username}
                if self.user
                else None
            ),
            "categories": (
                [category.to_dict() for category in self.category_in_game_category]
                if self.category_in_game_category
                else None
            ),
            "cover_art": (
                [cover_art.to_dict() for cover_art in self.cover_art]
                if self.cover_art
                else None
            ),
            "trailer": (
                [trailer.to_dict() for trailer in self.trailer]
                if self.trailer
                else None
            ),
            "screenshots": (
                [screenshots.to_dict() for screenshots in self.screenshot]
                if self.screenshot
                else None
            ),
            "reviews": (
                [review.to_dict() for review in self.review] if self.review else None
            ),
        }
