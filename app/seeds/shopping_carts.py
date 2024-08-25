from app.models import db, environment, SCHEMA, ShoppingCart
from sqlalchemy.sql import text
from datetime import datetime


def seed_shopping_carts():
    game_science = ShoppingCart(user_id=1)
    blizzard_entertainment = ShoppingCart(user_id=2)
    digital_extreme = ShoppingCart(user_id=3)
    saber_interactive = ShoppingCart(user_id=4)
    sledgehammer_games = ShoppingCart(user_id=5)
    firaxis_games = ShoppingCart(user_id=6)
    valve = ShoppingCart(user_id=7)
    iron_clad_games_corporation = ShoppingCart(user_id=8)
    fromsoftware_inc = ShoppingCart(user_id=9)
    larian_studios = ShoppingCart(user_id=10)
    demo_developer = ShoppingCart(user_id=11)

    db.session.add_all(
        [
            game_science,
            blizzard_entertainment,
            digital_extreme,
            saber_interactive,
            sledgehammer_games,
            firaxis_games,
            valve,
            iron_clad_games_corporation,
            fromsoftware_inc,
            larian_studios,
            demo_developer,
        ]
    )
    db.session.commit()


def undo_shopping_carts():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.shopping_carts RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute(text("DELETE FROM shopping_carts"))

    db.session.commit()
