from app.models import db, environment, SCHEMA, Game
from sqlalchemy.sql import text
from datetime import datetime


def seed_games():
    black_myth_wukong = Game(
        title="Black Myth Wukong",
        user_id=1,
        price="59.99",
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
        price="59.99",
        release_date=datetime(2012, 8, 21).date(),
        description="For over two decades, Counter-Strike has offered an elite competitive experience, one shaped by millions of players from across the globe. And now the next chapter in the CS story is about to begin. This is Counter-Strike 2. A free upgrade to CS:GO, Counter-Strike 2 marks the largest technical leap in Counter-Strike’s history. Built on the Source 2 engine, Counter-Strike 2 is modernized with realistic physically-based rendering, state of the art networking, and upgraded Community Workshop tools.",
        min_requirements="Requires a 32-bit processor and operating system",
        min_os=" Windows® 10",
        min_processor="4 hardware CPU threads - Intel® Core™ i5 750 or higher",
        min_memory="8 GB RAM",
        min_graphics="Video card must be 1 GB or more and should be a DirectX 11-compatible with support for Shader Model 5.0",
        min_directx="Version 11",
        min_storage="85 GB available space",
        min_sound_card="Windows Compatible Audio Device",
    )

    overwatch_2 = Game(
        title="Overwatch 2",
        user_id=2,
        price="14.99",
        release_date=datetime(2023, 8, 10).date(),
        description="Overwatch 2 builds on the award-winning foundation of the original Overwatch, delivering a fresh and evolved experience while staying true to the heart of the franchise. Featuring all-new content, including engaging cooperative missions, reimagined heroes, and updated maps, Overwatch 2 enhances the fast-paced, team-based gameplay players love. With an expanded PvE experience, deeper storytelling, and the introduction of the 5v5 format, Overwatch 2 represents a significant evolution that's designed to bring players together while offering new ways to experience the vibrant world of Overwatch.",
        min_requirements="Requires a 64-bit processor and operating system",
        min_os=" Windows® 10 64-bit (latest Service Pack)",
        min_processor="Intel® Core™ i3 or AMD Phenom™ X3 8650",
        min_memory="6 GB RAM",
        min_graphics="NVIDIA® GeForce® GTX 600 series, AMD Radeon™ HD 7000 series",
        min_directx="Version 11",
        min_storage="50 GB available space",
        min_sound_card="Windows Compatible Audio Device",
    )

    db.session.add_all([black_myth_wukong, counter_strike_2, overwatch_2])
    db.session.commit()


def undo_games():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.games RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM games"))

    db.session.commit()
