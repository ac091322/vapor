from .db import db, environment, SCHEMA, add_prefix_for_prod


wishlist_joined = db.Table(
    "wishlists_joined",
    db.Column(
        "user_id",
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("users.id")),
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
    wishlist_joined.schema = SCHEMA