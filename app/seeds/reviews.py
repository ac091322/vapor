from app.models import db, environment, SCHEMA, Review
from sqlalchemy.sql import text


def seed_reviews():
    gamescience_review_overwatch2 = Review(
        description="It's basically a toxic relationship. There's a part of it that's fun and has you hooked wanting more, but it destroys you in the end if you don't know how to control yourself with all the ***** it throws at you. 10/10 EXPERIENCE FOR ME BECAUSE IM BUILT DIFFERENT AND I HAVE TOO MUCH TOXIC MASCULINITY TO ADMIT DEFEAT TO THIS **** GAME",
        thumbs_up=True,
        thumbs_down=False,
        user_id=1,
        game_id=2,
    )

    gamescience_review_callofduty = Review(
        description="great game i really enjoy it and playing ranked. The one huge problem I and allot of other players have is getting spam reported by people that think u cheat and u get shadowbanned for a week. I have been shadowbanned more then 5 times already and I dont cheat. It is just something activision has to work on and make a better anti cheat and stop banning people for a week that do not cheat but it is a fun game",
        thumbs_up=True,
        thumbs_down=False,
        user_id=1,
        game_id=2,
    )

    gamescience_review_eldenring = Review(
        description="Simply leaving a \"not recommended\" as this game isn't for casual players. After having beaten the game and DLC I can safely say I would never recommend this game to another casual player, only those who enjoy challenge after challenge and fighting for their life with everything. I have played both with and without summons and neither would I recommend the game. It's objectively a good game with incredible world design, but other than that don't play it.",
        thumbs_up=False,
        thumbs_down=True,
        user_id=1,
        game_id=2,
    )

    gamescience_brotato = Review(
        description="Brotato is one of those indie gems that always looks small or unimportant, but actually bangs so hard. It's easily one of my favorite roguelikes of all time and one of my favorite aspects of it is the simplicity of it. This game takes place in one arena where you survive 60 second waves while fighting off hordes of enemies with weapons and abilities you acquire in between waves with money that is dropped from enemies. It's a super simple gameplay flow that anyone can enjoy, yet its SO addicting. I'll get on expecting to do maybe a run or two and then all of a sudden I've done like five. This game is just FUN, it's that simple. 8/10",
        thumbs_up=True,
        thumbs_down=False,
        user_id=1,
        game_id=2,
    )

    db.session.add_all(
        [
            gamescience_review_overwatch2,
            gamescience_review_callofduty,
            gamescience_review_eldenring,
            gamescience_brotato,
        ]
    )
    db.session.commit()


def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
