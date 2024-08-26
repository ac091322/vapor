from app.models import db, environment, SCHEMA, Category
from sqlalchemy.sql import text


def seed_categories():
    action = Category(name="Action")
    adventure = Category(name="Adventure")
    fighting = Category(name="Fighting")
    hack_and_slash = Category(name="Hack & Slash")
    arcade = Category(name="Arcade")
    role_playing = Category(name="Role Playing")
    first_person_shooter = Category(name="First Person Shooter")
    third_person_shooter = Category(name="Third Person Shooter")
    fantasy = Category(name="Fantasy")
    mmorpg = Category(name="MMORPG")
    moba = Category(name="MOBA")
    roguelike = Category(name="Roguelike")
    strategy = Category(name="Strategy")
    tower_defense = Category(name="Tower Defense")
    turn_based = Category(name="Turn-Based")
    space = Category(name="Space")
    racing = Category(name="Racing")
    sports = Category(name="Sports")
    runner = Category(name="Runner")
    military = Category(name="Military")
    simulation = Category(name="Simulation")
    casual = Category(name="Casual")
    card_and_board = Category(name="Card & Board")
    puzzle = Category(name="Puzzle")
    story_rich = Category(name="Story_Rich")

    db.session.add_all(
        [
            action,
            adventure,
            fighting,
            hack_and_slash,
            arcade,
            role_playing,
            first_person_shooter,
            third_person_shooter,
            fantasy,
            mmorpg,
            moba,
            roguelike,
            strategy,
            tower_defense,
            turn_based,
            space,
            racing,
            sports,
            runner,
            military,
            simulation,
            casual,
            card_and_board,
            puzzle,
            story_rich,
        ]
    )
    db.session.commit()


def undo_categories():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.categories RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute(text("DELETE FROM categories"))

    db.session.commit()
