from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.sql import func


library = db.Table(
    "libraries",
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
    db.Column(
        "created_at",
        db.DateTime,
        nullable=False,
        server_default=func.now(),
    ),
)

if environment == "production":
    library.schema = SCHEMA
