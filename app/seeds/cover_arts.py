from app.models import db, environment, SCHEMA, CoverArt
from sqlalchemy.sql import text


def seed_cover_arts():
    black_myth_wukong = CoverArt(
        cover_art_url="https://vapor-ac.s3.amazonaws.com/01_black_myth_wukong/cover-art-wukong.png",
        game_id=1,
        filename="cover_art_1724703873666.png",
    )

    counter_strike_2 = CoverArt(
        cover_art_url="https://vapor-ac.s3.amazonaws.com/02_counter_strike_2/covert-art-counter-strike-2.png",
        game_id=2,
        filename="cover_art_1724703873667.png",
    )

    overwatch_2 = CoverArt(
        cover_art_url="https://vapor-ac.s3.amazonaws.com/03_overwatch_2/cover-art-overwatch-2.png",
        game_id=3,
        filename="cover_art_1724703873668.png",
    )

    db.session.add_all([black_myth_wukong, counter_strike_2, overwatch_2])
    db.session.commit()


def undo_cover_arts():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.cover_arts RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute(text("DELETE FROM cover_arts"))

    db.session.commit()
