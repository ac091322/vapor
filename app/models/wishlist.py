from .db import db, environment, SCHEMA, add_prefix_for_prod


wishlist = db.Table(
    "wishlists",
    db.Column(
        "user_id",
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("users.id"), ondelete="CASCADE"),
        primary_key=True,
    ),
    db.Column(
        "game_id",
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("games.id"), ondelete="CASCADE"),
        primary_key=True,
    ),
)

if environment == "production":
    wishlist.schema = SCHEMA
