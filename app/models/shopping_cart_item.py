from .db import db, environment, SCHEMA, add_prefix_for_prod


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
)

if environment == "production":
    shopping_cart_item.schema = SCHEMA
