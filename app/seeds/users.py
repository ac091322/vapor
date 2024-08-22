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
        email="blizzardentertainmentinc@vapor.io",
        password="password",
        developer_name=None,
        avatar=None,
        about=None,
    )

    digital_extreme = User(
        username="Digital Extreme",
        email="digitalextreme@vapor.io",
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

    sledgehammer_games = User(
        username="Sledgehammer Games",
        email="sledgehammergames@vapor.io",
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
        email="ironcladgamescorporation@vapor.io",
        password="password",
        developer_name=None,
        avatar=None,
        about=None,
    )

    fromsoftware_inc = User(
        username="FromSoftware, Inc.",
        email="fromsoftwareinc@vapor.io",
        password="password",
        developer_name=None,
        avatar=None,
        about=None,
    )

    larian_studios = User(
        username="Larian Studies",
        email="larianstudios@vapor.io",
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
        avatar=None,
        about=None,
    )

    db.session.add_all(
        [
            game_science,
            blizzard_entertainment_inc,
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
