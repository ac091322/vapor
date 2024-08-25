from app.models import db, environment, SCHEMA, shopping_cart_item
from sqlalchemy.sql import text


def seed_shopping_cart_items():
    shopping_cart_item_entries = [
        {"shopping_cart_id": 2, "game_id": 1},
        {"shopping_cart_id": 3, "game_id": 1},
        {"shopping_cart_id": 3, "game_id": 2},
        {"shopping_cart_id": 3, "game_id": 3},
    ]

    for entry in shopping_cart_item_entries:
        db.session.execute(shopping_cart_item.insert().values(entry))

    db.session.commit()
    pass


def undo_shopping_cart_items():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.shopping_cart_items RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute(text("DELETE FROM shopping_cart_items"))

    db.session.commit()
