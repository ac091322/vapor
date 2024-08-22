from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime, timezone
from .game_category_joined import game_category_joined
from .game_screenshot_joined import game_screenshot_joined
from .wishlist_joined import wishlist_joined
from .cart_item_joined import cart_item_joined
from .library_joined import library_joined


class Game(db.Model):
    __tablename__ = "games"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(40), nullable=False, unique=True)
    user_id = db.Column(
        db.ForeignKey(add_prefix_for_prod("users.id"), ondelete="CASCADE"),
        nullable=False,
    )
    price = db.Column(db.Numeric(5, 2), nullable=False)
    release_date = db.Column(db.Date, nullable=False)
    min_requirements = db.Column(db.String(255), nullable=False)
    min_os = db.Column(db.String(255), nullable=False)
    min_processor = db.Column(db.String(255), nullable=False)
    min_memory = db.Column(db.String(255), nullable=False)
    min_graphics = db.Column(db.String(255), nullable=False)
    min_directx = db.Column(db.String(255), nullable=False)
    min_storage = db.Column(db.String(255), nullable=False)
    min_sound_card = db.Column(db.String(255), nullable=False)
    min_additional_notes = db.Column(db.String(255), nullable=False)
    rec_requirements = db.Column(db.String(255), nullable=False)
    rec_os = db.Column(db.String(255), nullable=False)
    rec_processor = db.Column(db.String(255), nullable=False)
    rec_memory = db.Column(db.String(255), nullable=False)
    rec_graphics = db.Column(db.String(255), nullable=False)
    rec_directx = db.Column(db.String(255), nullable=False)
    rec_storage = db.Column(db.String(255), nullable=False)
    rec_sound_card = db.Column(db.String(255), nullable=False)
    rec_additional_notes = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(tz=timezone.utc))
    updated_at = db.Column(
        db.DateTime,
        default=lambda: datetime.now(tz=timezone.utc),
        onupdate=lambda: datetime.now(tz=timezone.utc),
    )

    # many-to-many relationships:
    category_in_game_category_joined = db.relationship(
        "Category",
        secondary=game_category_joined,
        back_populates="game_in_game_category_joined",
        passive_deletes=True,
    )
    screenshot_in_game_screenshot_joined = db.relationship(
        "Screenshot",
        secondary=game_screenshot_joined,
        back_populates="game_in_game_screenshot_joined",
        passive_deletes=True,
    )
    user_in_wishlist_joined = db.relationship(
        "User",
        secondary=wishlist_joined,
        back_populates="game_in_wishlist_joined",
        passive_deletes=True,
    )
    shopping_cart_in_cart_item_joined = db.relationship(
        "ShoppingCart",
        secondary=cart_item_joined,
        back_populates="game_in_cart_item_joined",
        passive_deletes=True,
    )
    user_in_library_joined = db.relationship(
        "User",
        secondary=library_joined,
        back_populates="game_in_library_joined",
        passive_deletes=True,
    )

    # many-to-one relationships:
    user = db.relationship("User", back_populates="game")

    # one-to-many relationship:
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
            "cover_art": self.cover_art,
            "min-requirements": self.min_requirements,
            "min-os": self.min_os,
            "min-processor": self.min_processor,
            "min-memory": self.min_memory,
            "min-graphics": self.min_graphics,
            "min-directx": self.min_graphics,
            "min-storage": self.min_storage,
            "min-sound_card": self.rec_storage,
            "min-additional_notes": self.rec_additional_notes,
            "rec-requirements": self.rec_requirements,
            "rec-os": self.rec_os,
            "rec-processor": self.rec_processor,
            "rec-memory": self.rec_memory,
            "rec-graphics": self.rec_graphics,
            "rec-directx": self.rec_directx,
            "rec-storage": self.rec_storage,
            "rec-sound_card": self.rec_storage,
            "rec-additional_notes": self.rec_additional_notes,
            "user": self.user.to_dict() if self.user else None,
            "categories": (
                [
                    category.to_dict()
                    for category in self.category_in_game_category_joined
                ]
                if self.category_in_game_category_joined
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
                [
                    screenshots.to_dict()
                    for screenshots in self.screenshot_in_game_screenshot_joined
                ]
                if self.screenshot_in_game_screenshot_joined
                else None
            ),
        }
