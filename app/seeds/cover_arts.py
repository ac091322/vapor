from app.models import db, environment, SCHEMA, CoverArt
from sqlalchemy.sql import text


def seed_cover_arts():
    black_myth_wukong = CoverArt(
        cover_art_url="https://vapor-ac.s3.amazonaws.com/01_black_myth_wukong/cover-art-wukong.png",
        game_id=1,
        filename="cover_art_1724703873660.png",
    )

    counter_strike_2 = CoverArt(
        cover_art_url="https://vapor-ac.s3.amazonaws.com/02_counter_strike_2/covert-art-counter-strike-2.png",
        game_id=2,
        filename="cover_art_1724703873661.png",
    )

    overwatch_2 = CoverArt(
        cover_art_url="https://vapor-ac.s3.amazonaws.com/03_overwatch_2/cover-art-overwatch-2.png",
        game_id=3,
        filename="cover_art_1724703873662.png",
    )

    maplestory = CoverArt(
        cover_art_url="https://vapor-ac.s3.amazonaws.com/04-maplestory/cover-art-maplestory.png",
        game_id=4,
        filename="cover_art_1724703873663.png",
    )

    space_marine_2 = CoverArt(
        cover_art_url="https://vapor-ac.s3.amazonaws.com/05-space-marine-2/cover-art-space-marine-2.png",
        game_id=5,
        filename="cover_art_1724703873664.png",
    )

    sin_of_a_solar_empire_ii = CoverArt(
        cover_art_url="https://vapor-ac.s3.amazonaws.com/06-sin-of-a-solar-empire-ii/cover-art-sin-of-a-solar-empire-ii.png",
        game_id=6,
        filename="cover_art_1724703873665.png",
    )

    art_of_war_red_tides = CoverArt(
        cover_art_url="https://vapor-ac.s3.amazonaws.com/07-art-of-war-red-tides/cover-art-art-of-war-red-tides.png",
        game_id=7,
        filename="cover_art_1724703873666.png",
    )

    sid_meiers_civilization_vi = CoverArt(
        cover_art_url="https://vapor-ac.s3.amazonaws.com/08-sid-meiers-civilization-vi/cover-art-sid-meiers-civilization-vi.png",
        game_id=8,
        filename="cover_art_1724703873667.png",
    )

    ultrakill = CoverArt(
        cover_art_url="https://vapor-ac.s3.amazonaws.com/09-ultrakill/cover-art-ultrakill.png",
        game_id=9,
        filename="cover_art_1724703873668.png",
    )

    tactical_breach_wizards = CoverArt(
        cover_art_url="https://vapor-ac.s3.amazonaws.com/10-tactical-breach-wizards/cover-art-tactical-breach-wizards.png",
        game_id=10,
        filename="cover_art_1724703873669.png",
    )

    stumble_guys = CoverArt(
        cover_art_url="https://vapor-ac.s3.amazonaws.com/11-stumble-guys/cover-art-stumble-guys.png",
        game_id=11,
        filename="cover_art_1724703873670.png",
    )

    dota_2 = CoverArt(
        cover_art_url="https://vapor-ac.s3.amazonaws.com/12-dota-2/cover-art-dota-2.png",
        game_id=12,
        filename="cover_art_1724703873671.png",
    )

    shapez_2 = CoverArt(
        cover_art_url="https://vapor-ac.s3.amazonaws.com/13-shapez-2/cover-art-shapez-2.png",
        game_id=13,
        filename="cover_art_1724703873672.png",
    )

    cult_of_the_lamb = CoverArt(
        cover_art_url="https://vapor-ac.s3.amazonaws.com/14-cult-of-the-lamb/cover-art-cult-of-the-lamb.png",
        game_id=14,
        filename="cover_art_1724703873673.png",
    )

    db.session.add_all(
        [
            black_myth_wukong,
            counter_strike_2,
            overwatch_2,
            maplestory,
            space_marine_2,
            sin_of_a_solar_empire_ii,
            art_of_war_red_tides,
            sid_meiers_civilization_vi,
            ultrakill,
            tactical_breach_wizards,
            stumble_guys,
            dota_2,
            shapez_2,
            cult_of_the_lamb,
        ]
    )
    db.session.commit()


def undo_cover_arts():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.cover_arts RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute(text("DELETE FROM cover_arts"))
    db.session.commit()
