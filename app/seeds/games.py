from app.models import db, environment, SCHEMA, Game
from sqlalchemy.sql import text
from datetime import datetime


def seed_games():
    black_myth_wukong = Game(
        title="Black Myth Wukong",
        user_id=1,
        price=59.99,
        release_date=datetime(2024, 8, 19).date(),
        description="Black Myth: Wukong is an action RPG rooted in Chinese mythology. The story is based on Journey to the West, one of the Four Great Classical Novels of Chinese literature. You shall set out as the Destined One to venture into the challenges and marvels ahead, to uncover the obscured truth beneath the veil of a glorious legend from the past.",
        min_requirements="Requires a 64-bit processor and operating system",
        min_os="Windows 10 64-bit",
        min_processor="Intel Core i5-8400 / AMD Ryzen 5 1600",
        min_memory="16 GB RAM",
        min_graphics="NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580 8GB",
        min_directx="Version 11",
        min_storage="130 GB available space",
        min_sound_card="Windows Compatible Audio Device",
    )

    counter_strike_2 = Game(
        title="Counter-Strike 2",
        user_id=7,
        price=59.99,
        release_date=datetime(2012, 8, 21).date(),
        description="For over two decades, Counter-Strike has offered an elite competitive experience, one shaped by millions of players from across the globe. And now the next chapter in the CS story is about to begin. This is Counter-Strike 2. A free upgrade to CS:GO, Counter-Strike 2 marks the largest technical leap in Counter-Strike’s history. Built on the Source 2 engine, Counter-Strike 2 is modernized with realistic physically-based rendering, state of the art networking, and upgraded Community Workshop tools.",
        min_requirements="Requires a 32-bit processor and operating system",
        min_os="Windows® 10",
        min_processor="4 hardware CPU threads - Intel® Core™ i5 750 or higher",
        min_memory="8 GB RAM",
        min_graphics="Video card must be 1 GB or more and should be a DirectX 11-compatible and support Shader Model 5.0",
        min_directx="Version 11",
        min_storage="85 GB available space",
        min_sound_card="Windows Compatible Audio Device",
    )

    overwatch_2 = Game(
        title="Overwatch 2",
        user_id=2,
        price=14.99,
        release_date=datetime(2023, 8, 10).date(),
        description="Overwatch 2 builds on the award-winning foundation of the original Overwatch, delivering a fresh and evolved experience while staying true to the heart of the franchise. Featuring all-new content, including engaging cooperative missions, reimagined heroes, and updated maps, Overwatch 2 enhances the fast-paced, team-based gameplay players love. With an expanded PvE experience, deeper storytelling, and the introduction of the 5v5 format, Overwatch 2 represents a significant evolution that's designed to bring players together while offering new ways to experience the vibrant world of Overwatch.",
        min_requirements="Requires a 64-bit processor and operating system",
        min_os="Windows® 10 64-bit (latest Service Pack)",
        min_processor="Intel® Core™ i3 or AMD Phenom™ X3 8650",
        min_memory="6 GB RAM",
        min_graphics="NVIDIA® GeForce® GTX 600 series, AMD Radeon™ HD 7000 series",
        min_directx="Version 11",
        min_storage="50 GB available space",
        min_sound_card="Windows Compatible Audio Device",
    )

    maplestory = Game(
        title="MapleStory",
        user_id=3,
        price=10.00,
        release_date=datetime(2012, 8, 9).date(),
        description="Join over 260 Million Global Players in MapleStory, one of the original MMORPGs, where epic adventure, action-packed gameplay, & good friends await you! Featuring an iconic 2D art style, MapleStory offers the thrill of explosive power, bold anime-style self-expression, and absolute control of your characters' awesome abilities. Build your perfect custom hero from over 40 distinct classes with thousands of unique cosmetic options, and set off on your journey to face never-ending challenges and enjoy extraordinary rewards. Discover Your Story!",
        min_requirements="Requires a 32-bit processor and operating system",
        min_os=" Windows 8.1 (64 bit)",
        min_processor="Intel Core 2 Duo 3.0Ghz / AMD Athlon 64 x2 3.0Ghz",
        min_memory="4 GB RAM",
        min_graphics="GeForce 9600 GT / ATI Radeon HD 5670",
        min_directx="Version 9.0c",
        min_storage="50 GB available hard disk space",
        min_sound_card="Windows Compatible Audio Device",
    )

    space_marine_2 = Game(
        title="Warhammer 40,000: Space Marine 2",
        user_id=4,
        price=59.99,
        release_date=datetime(2024, 9, 9).date(),
        description="Embody the superhuman skill and brutality of a Space Marine. Unleash deadly abilities and devastating weaponry to obliterate the relentless Tyranid swarms. Defend the Imperium in spectacular third-person action in solo or multiplayer modes.",
        min_requirements="Requires a 64-bit processor and operating system",
        min_os="Windows 10/11 64-bit",
        min_processor="AMD Ryzen 5 2600X / Intel Core i5-8600K",
        min_memory="8 GB RAM",
        min_graphics="6 GB VRAM, AMD Radeon RX 580 / Nvidia GeForce GTX 1060",
        min_directx="Version 12",
        min_storage="75 GB available space",
        min_sound_card="Windows Compatible Audio Device",
    )

    sin_of_a_solar_empire_ii = Game(
        title="Sin of a Solar Empire II",
        user_id=8,
        price=39.99,
        release_date=datetime(2024, 8, 15).date(),
        description="Battle for galactic dominance in this real-time 4X strategy game with unrivaled scale! You'll explore, expand, exploit, and exterminate through military force, diplomacy, trade, culture, influence, and other underhanded tactics.",
        min_requirements="Requires a 64-bit processor and operating system",
        min_os="Windows 10 v1607+ / 11 (64-bit)",
        min_processor="4-core Processor (Intel Core i5 5th-generation or AMD Ryzen 2x00 series)",
        min_memory="8 GB RAM",
        min_graphics="3D Video Card w/2GB VRAM (Nvidia GeForce 950 / AMD Radeon RX 450)",
        min_directx="Version 11",
        min_storage="20 GB available space",
        min_sound_card="Windows Compatible Audio Device",
    )

    art_of_war_red_tides = Game(
        title="Art of War: Red Tides",
        user_id=1,
        price=1.00,
        release_date=datetime(2016, 12, 22).date(),
        description="Art of War: Red Tides is a fair multiplayer strategy game that allows different teams on the same platform (e.g. smartphones, PC, etc.) to battle against each other. You will encounter players around the world!",
        min_requirements="Requires a 32-bit processor and operating system",
        min_os="windowsXP SP3/win7/win8/win10",
        min_processor="Duel Core 2.3 GHz or equivalent processor",
        min_memory="2 GB RAM",
        min_graphics="GT220, 9500GT, HD4650 or greater",
        min_directx="Version 9.0",
        min_storage="2 GB available space",
        min_sound_card="Windows Compatible Audio Device",
    )

    sid_meiers_civilization_vi = Game(
        title="Sid Meier's Civilization® VI",
        user_id=6,
        price=24.93,
        release_date=datetime(2016, 10, 20).date(),
        description="Civilization VI is the newest installment in the award winning Civilization Franchise. Expand your empire, advance your culture and go head-to-head against history’s greatest leaders. Will your civilization stand the test of time?",
        min_requirements="Requires a 32-bit processor and operating system",
        min_os="10.14.6 (Mojave)",
        min_processor="Intel Core i5 2.7Ghz",
        min_memory="6 GB RAM",
        min_graphics="1 GB GPU Minimum - GeForce 775M | Radeon HD 6970 | Intel Iris Pro",
        min_directx="Version 9.0",
        min_storage="17 GB available space",
        min_sound_card="Windows Compatible Audio Device",
    )

    ultrakill = Game(
        title="ULTRAKILL",
        user_id=5,
        price=38.23,
        release_date=datetime(2020, 9, 3).date(),
        description="ULTRAKILL is a fast-paced ultraviolent retro FPS combining the skill-based style scoring from character action games with unadulterated carnage inspired by the best shooters of the '90s. Rip apart your foes with varied destructive weapons and shower in their blood to regain your health.",
        min_requirements="Requires a 64-bit processor and operating system",
        min_os="Windows 7 64-bit or later",
        min_processor="2.4GHZ Dual Core Processor Or Higher",
        min_memory="2 GB RAM",
        min_graphics="GeForce 9800GT Or Equivalent",
        min_directx="Version 9.0",
        min_storage="2 GB available space",
        min_sound_card="One that can handle extreme loudness",
    )

    tactical_breach_wizards = Game(
        title="Tactical Breach Wizards",
        user_id=9,
        price=17.99,
        release_date=datetime(2024, 8, 22).date(),
        description="In Tactical Breach Wizards, you lead a team of renegade wizards in kevlar through turn-based battles to unravel a modern conspiracy plot. Combine their unique spells in clever ways, or rewind time to try every crazy plan you can think of to punch a Traffic Warlock through a 4th story window.",
        min_requirements="Requires a 64-bit processor and operating system",
        min_os="Windows 10 and later versions",
        min_processor="Intel Core 2 Duo E4700 2.6 GHz or AMD Phenom 9950 Quad Core 2.6 GHz",
        min_memory="8 GB RAM",
        min_graphics="1GB ATI Radeon HD 5770, 1GB NVIDIA GeForce GTX 460 or better",
        min_directx="Version 11",
        min_storage="3 GB available space",
        min_sound_card="Windows Compatible Audio Device",
    )

    stumble_guys = Game(
        title="Stumble Guys",
        user_id=10,
        price=0.10,
        release_date=datetime(2021, 10, 7).date(),
        description="Race through obstacle courses against up to 32 players online. Run, jump and dash to the finish line until the best player takes the crown!",
        min_requirements="Requires a 64-bit processor and operating system",
        min_os="Windows 10",
        min_processor="Intel Core 2 Duo E8400 | AMD Phenom II X4 965",
        min_memory="4 GB RAM",
        min_graphics="AMD Radeon HD 7750 | NVIDIA Geforce GTX 260",
        min_directx="Version 11",
        min_storage="512 MB available space",
        min_sound_card="Windows Compatible Audio Device",
    )

    dota_2 = Game(
        title="Dota 2",
        user_id=7,
        price=9.99,
        release_date=datetime(2013, 7, 9).date(),
        description="Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes. And no matter if it's their 10th hour of play or 1,000th, there's always something new to discover. With regular updates that ensure a constant evolution of gameplay, features, and heroes, Dota 2 has taken on a life of its own.",
        min_requirements="Requires a 32-bit processor and operating system",
        min_os="Windows 10 and later versions",
        min_processor="Dual core from Intel or AMD at 2.8 GHz",
        min_memory="4 GB RAM",
        min_graphics="NVIDIA GeForce 8600/9600GT, ATI/AMD Radeon HD2600/3600",
        min_directx="Version 11",
        min_storage="60 GB available space",
        min_sound_card="DirectX Compatible",
    )

    shapez_2 = Game(
        title="shapez 2",
        user_id=11,
        price=19.99,
        release_date=datetime(2024, 8, 15).date(),
        description="Dive into a factory-building game where the focus is on just that — building huge factories! Construct sprawling multi-level factories and min-max your layouts without limits. Shapez 2 is tailor-made for enthusiasts who crave the thrill of optimizing production lines and perfecting automation.",
        min_requirements="Requires a 64-bit processor and operating system",
        min_os="Windows 10 64bit",
        min_processor="Intel(R) Core(TM) i5-4440 CPU",
        min_memory="4 GB RAM",
        min_graphics="Intel(R) UHD Graphics 630, 1GB VRAM",
        min_directx="Version 11",
        min_storage="2000 MB available space",
        min_sound_card="Windows Compatible Audio Device",
    )

    cult_of_the_lamb = Game(
        title="Cult of the Lamb",
        user_id=12,
        price=24.99,
        release_date=datetime(2022, 8, 11).date(),
        description="Start your own cult in a land of false prophets, venturing out into diverse and mysterious regions to build a loyal community of woodland Followers and spread your Word to become the one true cult.",
        min_requirements="Requires a 64-bit processor and operating system",
        min_os="Windows 10 and later versions",
        min_processor="Intel Core i3-3240 (2 * 3400); AMD FX-4300 (4 * 3800)",
        min_memory="4 GB RAM",
        min_graphics="GeForce GTX 560 Ti (1024 VRAM); Radeon HD 7750 (1024 VRAM)",
        min_directx="Version 11",
        min_storage="4 GB available space",
        min_sound_card="Windows Compatible Audio Device",
    )

    gundam_breaker_4 = Game(
        title="GUNDAM BREAKER 4",
        user_id=13,
        price=59.99,
        release_date=datetime(2024, 8, 28).date(),
        description="Create your own ultimate Gundam in the newest Gundam Breaker! With more customizable parts than ever before, you finally have the freedom to build your perfect Gunpla. Test it in battle using the brand new dual-weapon system and break parts off of your enemies and add them to your collection.",
        min_requirements="Requires a 64-bit processor and operating system",
        min_os="Windows 10",
        min_processor="Intel Core i5-2400 / AMD FX-6300",
        min_memory="8 GB RAM",
        min_graphics="Nvidia GeForce GTX 760 / AMD Radeon RX 280 / Intel Arc A380",
        min_directx="Version 11",
        min_storage="14 GB available space",
        min_sound_card="Windows Compatible Audio Device",
    )

    satisfactory = Game(
        title="Satisfactory",
        user_id=14,
        price=35.99,
        release_date=datetime(2024, 9, 10).date(),
        description="Satisfactory is a first-person open-world factory building game with a dash of exploration and combat. Play alone or with friends, explore an alien planet, create multi-story factories, and enter conveyor belt heaven!",
        min_requirements="Requires a 64-bit processor and operating system",
        min_os="Windows 10 or later (64-Bit)",
        min_processor="i5-3570 3.4 GHz 4 Core",
        min_memory="8 GB RAM",
        min_graphics="Nvidia GTX 1650/GTX 1050-ti, or AMD RX 470/RX 570, or equivalent performance & VRAM",
        min_directx="Version 11",
        min_storage="20 GB available space",
        min_sound_card="Windows Compatible Audio Device",
    )

    wild_bastards = Game(
        title="Wild Bastards",
        user_id=16,
        price=29.74,
        release_date=datetime(2024, 9, 12).date(),
        description="The spiritual successor to the award-winning game Void Bastards, Wild Bastards is a roguelike strategy shooter with heart-pounding FPS action, mod management, and a tactical campaign. Saddle up and lead the most notorious outlaws in the galaxy.",
        min_requirements="Requires a 64-bit processor and operating system",
        min_os="Windows 10 (64-bit versions)",
        min_processor="Intel Quad Core 2GHz",
        min_memory="8 GB RAM",
        min_graphics="NVIDIA GeForce GTX 970",
        min_directx="Version 11",
        min_storage="10 GB available space",
        min_sound_card="Windows Compatible Audio Device",
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
            gundam_breaker_4,
            satisfactory,
            wild_bastards,
        ]
    )
    db.session.commit()


def undo_games():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.games RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM games"))
    db.session.commit()
