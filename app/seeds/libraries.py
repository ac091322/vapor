from app.models import db, environment, SCHEMA, library
from sqlalchemy.sql import text


def seed_libraries():
    library_entries = [
        {"user_id": 1, "game_id": 2},
        {"user_id": 1, "game_id": 3},
        {"user_id": 1, "game_id": 6},
        {"user_id": 1, "game_id": 15},
        {"user_id": 2, "game_id": 4},
        {"user_id": 2, "game_id": 5},
        {"user_id": 3, "game_id": 10},
        {"user_id": 6, "game_id": 1},
        {"user_id": 6, "game_id": 2},
        {"user_id": 6, "game_id": 3},
        {"user_id": 6, "game_id": 6},
        {"user_id": 6, "game_id": 7},
        {"user_id": 6, "game_id": 10},
        {"user_id": 6, "game_id": 11},
        {"user_id": 6, "game_id": 12},
        {"user_id": 6, "game_id": 13},
        {"user_id": 6, "game_id": 15},
        {"user_id": 8, "game_id": 1},
        {"user_id": 8, "game_id": 3},
        {"user_id": 8, "game_id": 4},
        {"user_id": 8, "game_id": 9},
        {"user_id": 8, "game_id": 13},
        {"user_id": 10, "game_id": 6},
        {"user_id": 10, "game_id": 7},
        {"user_id": 10, "game_id": 8},
        {"user_id": 10, "game_id": 9},
        {"user_id": 10, "game_id": 11},
        {"user_id": 11, "game_id": 1},
        {"user_id": 11, "game_id": 2},
        {"user_id": 11, "game_id": 3},
        {"user_id": 11, "game_id": 10},
        {"user_id": 11, "game_id": 14},
    ]

    for entry in library_entries:
        db.session.execute(library.insert().values(entry))

    db.session.commit()
    pass


def undo_libraries():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.libraries RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute(text("DELETE FROM libraries"))
    db.session.commit()
