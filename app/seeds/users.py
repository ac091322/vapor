from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_users():
    game_science = User(
        username="Game Science",
        email="gamescience@vapor.io",
        password="password",
        developer_name=None,
        avatar=None,
        about=None,
    )

    blizzard_entertainment_inc = User(
        username="Blizzard Entertainment, Inc.",
        email="blizzard@vapor.io",
        password="password",
        developer_name=None,
        avatar=None,
        about=None,
    )

    nexon_korea_corporation = User(
        username="NEXON Korea Corporation",
        email="nexon@vapor.io",
        password="password",
        developer_name=None,
        avatar=None,
        about=None,
    )

    saber_interactive = User(
        username="Saber Interactive",
        email="saberinteractive@vapor.io",
        password="password",
        developer_name=None,
        avatar=None,
        about=None,
    )

    arsi_kaita_patala = User(
        username='Arsi "Hakita" Patala',
        email="arsikaitapatala@vapor.io",
        password="password",
        developer_name=None,
        avatar=None,
        about=None,
    )

    firaxis_games = User(
        username="Firaxis Games",
        email="firaxisgames@vapor.io",
        password="password",
        developer_name=None,
        avatar=None,
        about=None,
    )

    valve = User(
        username="Valve",
        email="valve@vapor.io",
        password="password",
        developer_name=None,
        avatar=None,
        about=None,
    )

    iron_clad_games_corporation = User(
        username="Iron Clad Games Corporation",
        email="ironcladgames@vapor.io",
        password="password",
        developer_name=None,
        avatar=None,
        about=None,
    )

    suspicious_developments_inc = User(
        username="Suspicious Developments Inc",
        email="suspiciousdevelopments@vapor.io",
        password="password",
        developer_name=None,
        avatar=None,
        about=None,
    )

    scopely = User(
        username="Scopely",
        email="scopely@vapor.io",
        password="password",
        developer_name=None,
        avatar=None,
        about=None,
    )

    tobspr_games = User(
        username="Tobspr Games",
        email="tobsprgames@vapor.io",
        password="password",
        developer_name=None,
        avatar=None,
        about=None,
    )

    massive_monster = User(
        username="Massive Monster",
        email="massivemonster@vapor.io",
        password="password",
        developer_name=None,
        avatar=None,
        about=None,
    )

    crafts_and_meister_co_ltd = User(
        username="CRAFTS & MEISTER Co., Ltd",
        email="craftsandmeister@vapor.io",
        password="password",
        developer_name=None,
        avatar=None,
        about=None,
    )

    demo_developer = User(
        username="Demo Developer",
        email="demodeveloper@vapor.io",
        password="password",
        developer_name=None,
        avatar="https://vapor-ac.s3.amazonaws.com/01_black_myth_wukong/demo-avatar.png",
        about="You are now logged in as Demo Developer. As Demo Developer, go create a game!",
    )

    db.session.add_all(
        [
            game_science,
            blizzard_entertainment_inc,
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
            crafts_and_meister_co_ltd,
            demo_developer,
        ]
    )
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))
    db.session.commit()
