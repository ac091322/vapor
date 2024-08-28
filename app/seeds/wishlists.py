from app.models import db, environment, SCHEMA, wishlist
from sqlalchemy.sql import text


def seed_wishlists():
    wishlist_entries = [
        {"user_id": 1, "game_id": 2},
        {"user_id": 1, "game_id": 3},
        {"user_id": 11, "game_id": 1},
        {"user_id": 11, "game_id": 2},
        {"user_id": 11, "game_id": 3},
    ]

    for entry in wishlist_entries:
        db.session.execute(wishlist.insert().values(entry))

    db.session.commit()
    pass


def undo_wishlists():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.wishlists RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute(text("DELETE FROM wishlists"))
    db.session.commit()
