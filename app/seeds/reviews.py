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
        description="Can't wait til this game comes out!",
        thumbs_up=True,
        thumbs_down=False,
        user_id=1,
        game_id=5,
    )

    blizzard_review_space_marine_2 = Review(
        description="I've been waiting forever!!! Hurry up already Saber!",
        thumbs_up=True,
        thumbs_down=False,
        user_id=2,
        game_id=5,
    )

    nexon_review_space_marine_2 = Review(
        description="I'm excited. I've been waiting for 2 years.",
        thumbs_up=True,
        thumbs_down=False,
        user_id=3,
        game_id=5,
    )

    arsi_review_space_marine_2 = Review(
        description="if i have to wait any longer, i'm changing my thumbs up to a thumbs DOWN!!!",
        thumbs_up=True,
        thumbs_down=False,
        user_id=5,
        game_id=5,
    )

    firaxis_review_space_marine_2 = Review(
        description="tired of waiting...",
        thumbs_up=False,
        thumbs_down=True,
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

    firaxis_review_gundam_breaker_4 = Review(
        description="Fun addicting game with some obvious lack of budget issues like bad qol and choppy animations but still one of the best mecha games you can currently get for pc.",
        thumbs_up=True,
        thumbs_down=False,
        user_id=6,
        game_id=15,
    )

    valve_review_gundam_breaker_4 = Review(
        description="Extralarge Barbatos Mace ruined all the fun. Broken piece of *gear*. Every one running around it. Killed al the progression. FIX it!",
        thumbs_up=False,
        thumbs_down=True,
        user_id=7,
        game_id=15,
    )

    iron_clad_games_review_gundam_breaker_4 = Review(
        description="U can still get hit and killed while listening to plot convos in the middle of battle while the boss is immune during the convos. And if u guys havent read other reviews, the story is ♥♥♥♥♥♥♥ bad.",
        thumbs_up=False,
        thumbs_down=True,
        user_id=8,
        game_id=15,
    )

    firaxis_review_cult_of_the_lamb = Review(
        description="I am struggling with post game decisions in place after the sins updates. I started a new playthrough and was able to beat the main game with most all unlocks in a couple of evenings at most. You are immediately sent into challenge level dungeons and most of your resources burnt or stolen right after you win against the bishop. Not even 10 minutes of enjoying becoming a god or building up your base. To make it worse it locked me out of other quest lines for purgatory progression instead. This was my third playthrough and I was excited to get into the newer content, but its just soul sucking and time consuming unfun re-progression locked glorp I already had unlocked, but was taken away.",
        thumbs_up=False,
        thumbs_down=True,
        user_id=6,
        game_id=14,
    )

    valve_review_cult_of_the_lamb = Review(
        description="this game rocks coop is a little jarring at first though, dislike that it is ONLY through steam streaming/couch coop but they explained that they'd have to recode the game otherwise",
        thumbs_up=True,
        thumbs_down=False,
        user_id=7,
        game_id=14,
    )

    iron_clad_games_review_cult_of_the_lamb = Review(
        description="not a big fan of it honestly, the combat was fine and the building was also just meh. It's clearly a labor of love but I think the hype made me a bit disapointed.",
        thumbs_up=False,
        thumbs_down=True,
        user_id=8,
        game_id=14,
    )

    suspicious_developments_review_dota_2 = Review(
        description="dont play it. its so broken now. LIterally a win once, lose 400 times, regardless of role or skill. That is if you even are matched with your skill. Dota used to be about the game and players, its clear the money is their only focus now.",
        thumbs_up=False,
        thumbs_down=True,
        user_id=9,
        game_id=12,
    )

    scopely_review_dota_2 = Review(
        description="damn ♥♥♥♥ ranking system. Too many toxic behaviors and gutter trash like swines in ranking. This game is dead. Ranking system developers should go eat ♥♥♥♥.",
        thumbs_up=False,
        thumbs_down=True,
        user_id=10,
        game_id=12,
    )

    tobspr_games_review_dota_2 = Review(
        description="I've been playing Dota 2 since 2017, and it's been an incredible journey. The game offers a perfect blend of strategy, teamwork, and individual skill, keeping it fresh and exciting even after all these years. The frequent updates and a vast roster of unique heroes mean there's always something new to explore. Whether you're playing with friends or solo, every match feels different and challenging. Dota 2's deep mechanics and high skill ceiling make every victory feel truly rewarding. It's more than just a game—it's a constantly evolving experience.",
        thumbs_up=True,
        thumbs_down=False,
        user_id=11,
        game_id=12,
    )

    massive_monster_review_dota_2 = Review(
        description="Its Dota, it embodies a classic. For players getting into the game, keep in mind its made with the pro scene in mind, so its balanced for them. Lower level play sees some heroes shine more easily (it wont take you long to specify them), so invest in learning strategies against them from early on. GLHF!",
        thumbs_up=True,
        thumbs_down=False,
        user_id=12,
        game_id=12,
    )

    crafts_and_meister_review_tactical_breach_wizards = Review(
        description="I did not play much, but it was just a bit too easy for me coming from Xcom and Fire Emblem. I also really was not a fan of the goofy dialogue, it felt very marvel-esque with its use of quips, one liners, and puns. Just not a good fit for me. Maybe you will like it though. I don't think its a BAD game.",
        thumbs_up=False,
        thumbs_down=True,
        user_id=13,
        game_id=10,
    )

    suspicious_developments_review_sin_of_a_solar_empire_ii = Review(
        description="Fast paced, highly enjoyable X4 game with RTS elements, similar to Stellaris but more tactical, less micro management, and faster paced. Most games are wrapped up in 3~10 hours depending on map size. My only criticism is the limited total fleet supply that prevents players from having many large fleets at once, which would be useful on the very large maps with many empires.",
        thumbs_up=True,
        thumbs_down=False,
        user_id=9,
        game_id=6,
    )

    game_science_review_satisfactory = Review(
        description="I played Satisfactory a lot on Epic. I liked the game but didn't like Epic, so I bought it on Steam and waited for full release to play it again. Sadly the game now crashes on startup every time. I hope this gets fixed...",
        thumbs_up=False,
        thumbs_down=True,
        user_id=1,
        game_id=16,
    )

    nexon_review_satisfactory = Review(
        description="This game is worth buying, playing and re-visiting super fun and different. Glad to be alive when Minecraft Came out, and Glad to be alive when Satisfactory Came out. Its perfect to play when watching a movie or video on the other monitor. Eazy to pick up and hard to get good at it.",
        thumbs_up=True,
        thumbs_down=False,
        user_id=3,
        game_id=16,
    )

    arsi_hakita_patala_review_satisfactory = Review(
        description="正式リリースで盛り上がってたので改めてプレイ開始したけどやっぱり最高ですねこのゲーム他に工場シミュ系をあまり持っていないけどfactorioやdyson sphere programとは差別化出来てると思うし、不便に思う所は大抵Modで解決出来る(今はアプデ直後なのでしばらくModは使えませんがw)ので自分に合った難易度やプレイ感にちょうど良く落とし込めるのも最高ですｂ",
        thumbs_up=True,
        thumbs_down=False,
        user_id=5,
        game_id=16,
    )

    suspicious_developments_review_satisfactory = Review(
        description="This game is far more than 'satisfactory' its interesting, exciting, silly, fun. Lots to explore, discover, build, invent, explode. This game really does the factory game genre the best of any i have tried and it superbly. I can't recommend this game enough. And now you can play with friends too. Get ready to spend hours, days, weeks, months, and years lost in this game. Lots of replayability which makes it value for money too. Highly recommended.",
        thumbs_up=True,
        thumbs_down=False,
        user_id=9,
        game_id=16,
    )

    tobspr_games_review_satisfactory = Review(
        description="Been playing since lockdown and I was surprised at how quickly I became addicted to building and exploring and coming up with solutions to becoming a more efficient Ficsit Pioneer. The 1.0 release is faster, smoother, more polished, and I can't wait to discover all the cool things they've packed in here. Following the development and the way the developers interact with the community has been such a positive experience too. Great work!",
        thumbs_up=True,
        thumbs_down=False,
        user_id=11,
        game_id=16,
    )

    massive_monster_review_satisfactory = Review(
        description="This is the first review I have ever left. Play this game. The blend of story and open world is perfect. Play this game. There is nothing better than optimizing your factories, you need this game. Play this game. If you like exploration and resource exploitation buy this game. I love no game more than this. Buy this game.",
        thumbs_up=True,
        thumbs_down=False,
        user_id=12,
        game_id=16,
    )

    crafts_and_meister_review_satisfactory = Review(
        description="One of my fav games of all time. It's a perfect combo of artistic creativity and in-depth strategic calculation. Now that there's a plot/story and a tonne of QOL improvements this is a no-brainer. Glad its finally getting the attention it deserves.",
        thumbs_up=True,
        thumbs_down=False,
        user_id=13,
        game_id=16,
    )

    valve_review_satisfactory = Review(
        description="After years of early access... releases in a horrible state! About as buggy as any of the other numbered updates.... dedicated servers are still pretty much not functioning. foliage will still respawn with the added new bonus of crashing the game when you use chainsaw!",
        thumbs_up=False,
        thumbs_down=True,
        user_id=7,
        game_id=16,
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
            firaxis_review_gundam_breaker_4,
            valve_review_gundam_breaker_4,
            iron_clad_games_review_gundam_breaker_4,
            firaxis_review_cult_of_the_lamb,
            valve_review_cult_of_the_lamb,
            iron_clad_games_review_cult_of_the_lamb,
            suspicious_developments_review_dota_2,
            scopely_review_dota_2,
            tobspr_games_review_dota_2,
            massive_monster_review_dota_2,
            crafts_and_meister_review_tactical_breach_wizards,
            suspicious_developments_review_sin_of_a_solar_empire_ii,
            game_science_review_satisfactory,
            nexon_review_satisfactory,
            arsi_hakita_patala_review_satisfactory,
            suspicious_developments_review_satisfactory,
            tobspr_games_review_satisfactory,
            massive_monster_review_satisfactory,
            crafts_and_meister_review_satisfactory,
            valve_review_satisfactory,
        ]
    )
    db.session.commit()


def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))
    db.session.commit()
