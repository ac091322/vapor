from app.models import db, environment, SCHEMA, ShoppingCart
from sqlalchemy.sql import text
from datetime import datetime


def seed_shopping_carts():
    game_science = ShoppingCart(user_id=1)
    blizzard_entertainment = ShoppingCart(user_id=2)
    nexon_korea_corporation = ShoppingCart(user_id=3)
    saber_interactive = ShoppingCart(user_id=4)
    arsi_kaita_patala = ShoppingCart(user_id=5)
    firaxis_games = ShoppingCart(user_id=6)
    valve = ShoppingCart(user_id=7)
    iron_clad_games_corporation = ShoppingCart(user_id=8)
    suspicious_developments_inc = ShoppingCart(user_id=9)
    scopely = ShoppingCart(user_id=10)
    tobspr_games = ShoppingCart(user_id=11)
    massive_monster = ShoppingCart(user_id=12)
    demo_developer = ShoppingCart(user_id=13)

    db.session.add_all(
        [
            game_science,
            blizzard_entertainment,
            nexon_korea_corporation,
            saber_interactive,
            arsi_kaita_patala,
            firaxis_games,
            valve,
            iron_clad_games_corporation,
            suspicious_developments_inc,
            scopely,
            tobspr_games,
            massive_monster,
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
