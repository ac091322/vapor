from app.models import db, environment, SCHEMA, game_category
from sqlalchemy.sql import text


def seed_game_categories():
    game_category_entries = [
        {"game_id": 1, "category_id": 2},
        {"game_id": 1, "category_id": 4},
        {"game_id": 1, "category_id": 6},
        {"game_id": 1, "category_id": 10},
        {"game_id": 1, "category_id": 25},
        {"game_id": 2, "category_id": 1},
        {"game_id": 2, "category_id": 7},
        {"game_id": 2, "category_id": 10},
        {"game_id": 2, "category_id": 20},
        {"game_id": 3, "category_id": 1},
        {"game_id": 3, "category_id": 7},
        {"game_id": 3, "category_id": 11},
        {"game_id": 3, "category_id": 25},
    ]

    for entry in game_category_entries:
        db.session.execute(game_category.insert().values(entry))

    db.session.commit()
    pass


def undo_game_categories():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.game_categories RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute(text("DELETE FROM game_categories"))
    db.session.commit()
