from .db import db, environment, SCHEMA, add_prefix_for_prod


game_category = db.Table(
    "game_categories",
    db.Column(
        "game_id",
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("games.id")),
        primary_key=True,
    ),
    db.Column(
        "category_id",
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("categories.id")),
        primary_key=True,
    ),
)

if environment == "production":
    game_category.schema = SCHEMA
