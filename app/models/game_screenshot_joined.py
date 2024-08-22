from .db import db, environment, SCHEMA, add_prefix_for_prod


game_screenshot_joined = db.Table(
    "games_screenshots_joined",
    db.Column(
        "game_id",
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("games.id")),
        primary_key=True,
    ),
    db.Column(
        "screenshot_id",
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("screenshots.id")),
        primary_key=True,
    ),
)

if environment == "production":
    game_screenshot_joined.schema = SCHEMA
