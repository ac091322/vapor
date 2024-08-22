from .db import db, environment, SCHEMA, add_prefix_for_prod


cart_item_joined = db.Table(
    "carts_items_joined",
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
    cart_item_joined.schema = SCHEMA
