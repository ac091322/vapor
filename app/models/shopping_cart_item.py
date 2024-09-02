from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func


shopping_cart_item = db.Table(
    "shopping_cart_items",
    db.Column(
        "shopping_cart_id",
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("shopping_carts.id")),
        primary_key=True,
    ),
    db.Column(
        "game_id",
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("games.id")),
        primary_key=True,
    ),
    db.Column(
        "created_at",
        db.DateTime,
        nullable=False,
        server_default=func.now(),
    ),
    db.Column(
        "updated_at",
        db.DateTime,
        nullable=False,
        server_default=func.now(),
        onupdate=func.now(),
    ),
)

if environment == "production":
    shopping_cart_item.schema = SCHEMA
