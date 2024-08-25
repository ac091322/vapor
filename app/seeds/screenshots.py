from app.models import db, environment, SCHEMA, Screenshot
from sqlalchemy.sql import text


def seed_screenshots():

    black_myth_wukong_screenshot_1 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/01_black_myth_wukong/screenshot1.jpg",
        game_id=1,
    )

    black_myth_wukong_screenshot_2 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/01_black_myth_wukong/screenshot2.jpg",
        game_id=1,
    )

    black_myth_wukong_screenshot_3 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/01_black_myth_wukong/screenshot3.jpg",
        game_id=1,
    )

    black_myth_wukong_screenshot_4 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/01_black_myth_wukong/screenshot4.jpg",
        game_id=1,
    )

    black_myth_wukong_screenshot_5 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/01_black_myth_wukong/screenshot5.jpg",
        game_id=1,
    )

    black_myth_wukong_screenshot_6 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/01_black_myth_wukong/screenshot6.jpg",
        game_id=1,
    )

    counter_strike_2_screenshot_1 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/02_counter_strike_2/screenshot1.jpg",
        game_id=2,
    )

    counter_strike_2_screenshot_2 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/02_counter_strike_2/screenshot2.jpg",
        game_id=2,
    )

    counter_strike_2_screenshot_3 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/02_counter_strike_2/screenshot3.jpg",
        game_id=2,
    )

    counter_strike_2_screenshot_4 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/02_counter_strike_2/screenshot4.jpg",
        game_id=2,
    )

    counter_strike_2_screenshot_5 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/02_counter_strike_2/screenshot5.jpg",
        game_id=2,
    )

    counter_strike_2_screenshot_6 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/02_counter_strike_2/screenshot6.jpg",
        game_id=2,
    )

    overwatch_2_screenshot_1 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/02_overwatch_2/screenshot1.jpg",
        game_id=2,
    )

    overwatch_2_screenshot_2 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/03_overwatch_2/screenshot2.jpg",
        game_id=3,
    )

    overwatch_2_screenshot_3 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/03_overwatch_2/screenshot3.jpg",
        game_id=3,
    )

    overwatch_2_screenshot_4 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/03_overwatch_2/screenshot4.jpg",
        game_id=3,
    )

    overwatch_2_screenshot_5 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/03_overwatch_2/screenshot5.jpg",
        game_id=3,
    )

    overwatch_2_screenshot_6 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/03_overwatch_2/screenshot6.jpg",
        game_id=3,
    )

    db.session.add_all(
        [
            black_myth_wukong_screenshot_1,
            black_myth_wukong_screenshot_2,
            black_myth_wukong_screenshot_3,
            black_myth_wukong_screenshot_4,
            black_myth_wukong_screenshot_5,
            black_myth_wukong_screenshot_6,
            counter_strike_2_screenshot_1,
            counter_strike_2_screenshot_2,
            counter_strike_2_screenshot_3,
            counter_strike_2_screenshot_4,
            counter_strike_2_screenshot_5,
            counter_strike_2_screenshot_6,
            overwatch_2_screenshot_1,
            overwatch_2_screenshot_2,
            overwatch_2_screenshot_3,
            overwatch_2_screenshot_4,
            overwatch_2_screenshot_5,
            overwatch_2_screenshot_6,
        ]
    )
    db.session.commit()


def undo_screenshots():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.screenshots RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute(text("DELETE FROM screenshots"))

    db.session.commit()
