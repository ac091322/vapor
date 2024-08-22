from app.models import db, environment, SCHEMA, CoverArt
from sqlalchemy.sql import text
from datetime import datetime


def seed_cover_arts():
    black_myth_wukong = CoverArt(
        cover_art_url="https://vapor-ac.s3.amazonaws.com/01_black_myth_wukong/cover-art.jpg",
        game_id=1,
    )

    db.session.add_all([black_myth_wukong])
    db.session.commit()


def undo_cover_arts():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.cover_arts RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute(text("DELETE FROM cover_arts"))

    db.session.commit()
