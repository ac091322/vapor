from app.models import db, environment, SCHEMA, Review
from sqlalchemy.sql import text


def seed_reviews():
    blizzard_review_black_my_wukong = Review(
        description="Honestly I kept my expectations low because it seemed too good to be true especially being the first game from the studio but they nailed it. The combat I would say is more akin to something like God of War rather than a soulslike. It feels great to play, very responsive, a lot of different ways to play. The graphics are fantastic and the game runs well, have not had any crashes so far.",
        thumbs_up=True,
        thumbs_down=False,
        user_id=2,
        game_id=1,
    )

    nexon_review_black_my_wukong = Review(
        description="Yes I'm aware that my thumbs up is never going to be seen by anyone. There is literally thousands of them. But what I'm NOT seeing is people actually talking about the game. At least at time of writing. Most people are talking about how good it looks, or how well it plays. Or vice versa. But no one talking about what the game is like. Or how it feels to play it. Is it worth my fricken money??? Well let me help with that. Yes it's worth the money.",
        thumbs_up=True,
        thumbs_down=False,
        user_id=3,
        game_id=1,
    )

    saber_review_black_my_wukong = Review(
        description="So far I love everything about this game. From the story, visuals, gameplay... it's a beautiful game about chinese mythology and a rare gem of 2024. The world and visuals are stunning, although exploration is linear I want to see everything this game has to offer. This is also the first game where I chose not to play in default english, as it sounds so much better in original voice (chinese) and it makes for a more unique experience.",
        thumbs_up=True,
        thumbs_down=False,
        user_id=4,
        game_id=1,
    )

    arsi_review_black_my_wukong = Review(
        description="(Review in progress, 8h so far, 2 chapters completed) This game surprised me more than I expected. The level of polish and care put into it is quite impressive and I absolutely loved my time with it so far. Graphics and art-design are top notch, sound design is great, music has its highs and lows, but what it doesn't lack is identity, it's pretty original. If you're familiar with the original story or Chinese mythology, you'll probably love the interpretations of characters from there, if you have no idea what is it about, prepare yourself for a wild ride, it can get quite weird, but equally amazing.",
        thumbs_up=True,
        thumbs_down=False,
        user_id=5,
        game_id=1,
    )

    firaxis_review_black_my_wukong = Review(
        description="Game really lives up to the hype. Stunning graphics and smooth combat. Skill tree resets are free and you keep everything after death, so you're free to experiment with builds. Took a risk and played it on steam deck with default settings, and was surprised it works for the most part. Saw a bit of lag after respawning 10+ times in the same area, which was fixed after a restart of the game, but 0 crashes so far (I'm 2 bosses in currently).",
        thumbs_up=True,
        thumbs_down=False,
        user_id=6,
        game_id=1,
    )

    gamescience_review_counterstrike_2 = Review(
        description="this game has caused me multiple brain injures and brain cancer from the amount of lack of iq from players of these games i have learnt 4 different languages and how to cuss in 15 different languages. my iq before : 85 my iq now : 25 definitely recommend this game buy it as soon as u pull out 15$ out your 5$ monthly salary job.",
        thumbs_up=True,
        thumbs_down=False,
        user_id=1,
        game_id=2,
    )

    blizzard_review_counterstrike_2 = Review(
        description="this is the worst game I've ever played. It makes me want to pull my hair out, punch my computer, set it on fire, sell all of my belongings, move to Ibiza, and live the rest of my life with the mere memories of its horrors. anyways 10/10 would recommend :D",
        thumbs_up=True,
        thumbs_down=False,
        user_id=2,
        game_id=2,
    )

    nexon_review_counterstrike_2 = Review(
        description="Despite Counter Strike having a prestigious & storied history as a competitive multiplayer game, the current crowd & community + difficulty level means that the game is not entirely welcoming to Players who aren't optimised towards taking a pre-aimed headshot kills mostly 95 percent of the time. This can lead to a very frustrating experience. This is made worse with lack of map knowledge, requiring a lot of trial & error (without guidance) till you successfully figure out higher success rate pixel peeks, and seemingly repeat the same scenario again & again. It's nice to play with friends, but the unforgiving nature of the game, means you're probably better playing Deathmatch mode than even Casual mode. Any frustrating map elements (maps aren't like the CS 1.6 or Source days), that much more experienced players know how to utilise, will only compound any pre-existing frustrations.",
        thumbs_up=False,
        thumbs_down=True,
        user_id=3,
        game_id=2,
    )

    saber_review_counterstrike_2 = Review(
        description='Counter Strike is an amazing shooting game. I am leaving a negative review because it is damn near impossible to get ranked in this game. I know winning 10 games doesn\'t seem like alot, but when you are forced to solo q through this because all of your friends are ranked and you can\'t play with them makes this task frustrating to say the least. Maybe they should change the system to "play 10 games" instead of "win 10 games". I would love to get back into counter strike, but with the randoms i\'m getting by solo queing ill probably have to play 70 comp games just to win the remaining 8 I need.',
        thumbs_up=False,
        thumbs_down=True,
        user_id=4,
        game_id=2,
    )

    arsi_review_counterstrike_2 = Review(
        description="Counter-Strike 2 is an incredibly good game with amazing graphics, smooth controls, and exciting gameplay. It's fun to play with friends, and each match feels different and challenging. However, like many popular games, there are sometimes hackers who try to cheat. This can be frustrating, but the game's developers are working hard to improve security and catch cheaters. Despite this, CS2 is still a fantastic game that offers a lot of enjoyment and competition. If you love shooting games, you'll have a great time playing CS2.",
        thumbs_up=True,
        thumbs_down=False,
        user_id=5,
        game_id=2,
    )

    gamescience_review_overwatch2 = Review(
        description="horrible game that makes u go mentally insane it's responsible for my downfall I have been playing it since 2017 and I have developed severe PTSD and paranoia from it. this game is pure satanic evil garbage do not install for your own sake It's a vortex of addiction that consumes your every thought",
        thumbs_up=False,
        thumbs_down=True,
        user_id=1,
        game_id=3,
    )

    nexon_review_overwatch_2 = Review(
        description="I didn't play Overwatch 1 and I didn't follow the news cycle for this game, so I didn't have any expectations for PvE, and I didn't lose anything by going from 6v6 to 5v5. On its own merits, Overwatch 2 is a good, really fun game. The characters are well-designed and interesting, and the gameplay feels good. I have a great time playing with my friends and I'd recommend this game to anyone if they have friends to play with.",
        thumbs_up=True,
        thumbs_down=False,
        user_id=3,
        game_id=3,
    )

    saber_review_overwatch_2 = Review(
        description="Game has it's flaws, mostly around balancing and monetization, and the devs really screwed up by breaking their PVE promises; But, I still think the core of the game is super fun and I feel like for the most part, the team has been heading in the right direction the last few seasons.",
        thumbs_up=True,
        thumbs_down=False,
        user_id=4,
        game_id=3,
    )

    arsi_review_overwatch_2 = Review(
        description="Give us the LOOT BOXES back! I've been playing OW since 2017 and the one thing I miss mostly is the loot boxes and being able to get any skin without paying too much. You need money, I get it. Keep the shop, sure, but give us also an option to get the stuff for free if you play a lot or if you achieve some kind of milestones. I don't hate the game, I still play it and recommend it to others. It can be fun, but the option to only pay for more stuff is awful.",
        thumbs_up=True,
        thumbs_down=False,
        user_id=5,
        game_id=3,
    )

    firaxis_review_overwatch_2 = Review(
        description="Overwatch 2 is merely a shell of its former self. As someone who sank hundreds of hours into the original Overwatch a number of years ago, the sequel can't hold a candle to what the game once was. This game is unfathomably miserable to play by yourself. The only redeeming aspect of this game is playing non-competitive modes with friends. Even then, the game can only be taken in small doses. The balancing of heroes has been awful since the 5v5 format was introduced - with Blizzard continuing to struggle to make the game fun to play. I do not recommend playing this game at all. 2/10",
        thumbs_up=False,
        thumbs_down=True,
        user_id=6,
        game_id=3,
    )

    gamescience_review_maplestory = Review(
        description="Great game, but I heavily recommend playing on a heroic server if you aren't a workaholic that makes tons of money. I can totally understand busy grinders that would rather just throw some money at the game with the very little time they have, totally not hating on the normal servers. But heroic servers in my opinion are a much much better gaming experience. I was unwilling to play this game for years until I heard about these servers and they have not disappointed me.",
        thumbs_up=True,
        thumbs_down=False,
        user_id=1,
        game_id=4,
    )

    blizzard_review_maplestory = Review(
        description="Having spent over 2.2k hours into this game many years ago and trying to come back to it was not the same. The game was very tedious and grindy back in the day but super enjoyable to just shoot the sh** with your people and farm on a map. The new events and play-style of the game has changed and I am unsure what to say about it positively. However, it is still a very fun game to play but bound to play solo now days. Also, do not spend money on Nexon like I did. :)",
        thumbs_up=True,
        thumbs_down=False,
        user_id=2,
        game_id=4,
    )

    saber_review_maplestory = Review(
        description="I've played since it first came out, but now with all the changes I don't think I can recommend the game anymore. I've lost all my characters and all the cash shop items I've bought including permanent items. I love the sounds, and the game play is still decent, but it's not what it once was and it isn't enough to keep players anymore.",
        thumbs_up=False,
        thumbs_down=True,
        user_id=4,
        game_id=4,
    )

    arsi_review_maplestory = Review(
        description="MapleStory offers a vibrant, pixel-art world with an equally charming soundtrack. In comparison to other MMORPGs, its music stands out by enhancing the game's whimsical atmosphere. Every zone has its unique melody, perfectly matching its mood. From the tranquil Ellinia to bustling Henesys, the music transports you into the game's lore. The soundtrack doesn't just set the scene but becomes a memorable part of the adventure, a feature many games in the genre lack.",
        thumbs_up=True,
        thumbs_down=False,
        user_id=5,
        game_id=4,
    )

    firaxis_review_maplestory = Review(
        description="dont play this game and and every game of nexon... if you want to WASTE your time then even dont play this game your progress will be sow and even slower when you commit to this game... the mechanics from starforcing is trash.. the drop rates/ star force rates are not what they are stated then only try to get your money and then think of how to even more make this game worse",
        thumbs_up=False,
        thumbs_down=True,
        user_id=6,
        game_id=4,
    )

    gamescience_review_space_marine_2 = Review(
        description="",
        thumbs_up=True,
        thumbs_down=False,
        user_id=1,
        game_id=5,
    )

    blizzard_review_space_marine_2 = Review(
        description="",
        thumbs_up=True,
        thumbs_down=False,
        user_id=2,
        game_id=5,
    )

    nexon_review_space_marine_2 = Review(
        description="",
        thumbs_up=True,
        thumbs_down=False,
        user_id=3,
        game_id=5,
    )

    arsi_review_space_marine_2 = Review(
        description="",
        thumbs_up=True,
        thumbs_down=False,
        user_id=5,
        game_id=5,
    )

    firaxis_review_space_marine_2 = Review(
        description="",
        thumbs_up=True,
        thumbs_down=False,
        user_id=6,
        game_id=5,
    )

    blizzard_review_art_of_war_red_tides = Review(
        description="Bugged dead game, a 2.0 version of it could be way better, has potential !",
        thumbs_up=False,
        thumbs_down=True,
        user_id=2,
        game_id=7,
    )

    nexon_review_art_of_war_red_tides = Review(
        description="I really wanted a Nexus War game, but this isn't it. It's WAY dumbed down and simplified to the point it's not fun. The map is small, there's not a lot to do in your base (I much preferred Nexus War's base building aspect than just clicking a portrait to spawn all units from the same building), there are no defensive structures, no risky \"greedy\" build choices, and the game ends so quickly you don't even get to enjoy those cool waves that Nexus War had when one side started to push hard and you had to desperately try to do something to keep that wave from steamrolling you... I don't know, this seems SUPER shallow. So much that I think I've got all it had to offer in 3 matches.",
        thumbs_up=False,
        thumbs_down=True,
        user_id=3,
        game_id=7,
    )

    saber_review_art_of_war_red_tides = Review(
        description="Look, this was a great EA game that had a lot of potential. And then the devs made bad choices and abandoned it. I don't know what they did but the game isn't nearly as fun as it used to be, and it's not...fun. No updates since 2019, EA in perpetuity.",
        thumbs_up=False,
        thumbs_down=True,
        user_id=4,
        game_id=7,
    )

    arsi_review_art_of_war_red_tides = Review(
        description="Ok, so at the time of writing this I have 166 hrs on record. Updated After about 265 hours and top ranked 1vs1 player. (Which they removed 1vs1 Ranked because it showed the imbalances in their game and they didn't want to fix it). First off, in beta, this was probably the most addicting fun, and strategic game that I have played in a long time. It is a Private map from SC2 turned into a full game. They had done such a great job in created multiple varieties of units and each of the 3 races had a \"feel\" to them. A play style if you will. This was the one game I just couldn't wait for release.",
        thumbs_up=False,
        thumbs_down=True,
        user_id=5,
        game_id=7,
    )

    firaxis_review_art_of_war_red_tides = Review(
        description="very good game! they should polish up and release it!",
        thumbs_up=True,
        thumbs_down=False,
        user_id=6,
        game_id=7,
    )

    db.session.add_all(
        [
                blizzard_review_black_my_wukong,
                nexon_review_black_my_wukong,
                saber_review_black_my_wukong,
                arsi_review_black_my_wukong,
                firaxis_review_black_my_wukong,
                gamescience_review_counterstrike_2,
                blizzard_review_counterstrike_2,
                saber_review_counterstrike_2,
                nexon_review_counterstrike_2,
                arsi_review_counterstrike_2,
                gamescience_review_overwatch2,
                nexon_review_overwatch_2,
                saber_review_overwatch_2,
                arsi_review_overwatch_2,
                firaxis_review_overwatch_2,
                gamescience_review_maplestory,
                blizzard_review_maplestory,
                saber_review_maplestory,
                arsi_review_maplestory,
                firaxis_review_maplestory,
                gamescience_review_space_marine_2,
                blizzard_review_space_marine_2,
                nexon_review_space_marine_2,
                arsi_review_space_marine_2,
                firaxis_review_space_marine_2,
                blizzard_review_art_of_war_red_tides,
                nexon_review_art_of_war_red_tides,
                saber_review_art_of_war_red_tides,
                arsi_review_art_of_war_red_tides,
                firaxis_review_art_of_war_red_tides,
        ]
    )
    db.session.commit()


def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))
    db.session.commit()
