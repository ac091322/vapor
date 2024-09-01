from app.models import db, environment, SCHEMA, Screenshot
from sqlalchemy.sql import text


def seed_screenshots():

    black_myth_wukong_screenshot_1 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/01_black_myth_wukong/screenshot1.jpg",
        game_id=1,
        filename="screenshot_0000000000000.png",
    )

    black_myth_wukong_screenshot_2 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/01_black_myth_wukong/screenshot2.jpg",
        game_id=1,
        filename="screenshot_0000000000001.png",
    )

    black_myth_wukong_screenshot_3 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/01_black_myth_wukong/screenshot3.jpg",
        game_id=1,
        filename="screenshot_0000000000002.png",
    )

    black_myth_wukong_screenshot_4 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/01_black_myth_wukong/screenshot4.jpg",
        game_id=1,
        filename="screenshot_0000000000003.png",
    )

    black_myth_wukong_screenshot_5 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/01_black_myth_wukong/screenshot5.jpg",
        game_id=1,
        filename="screenshot_0000000000004.png",
    )

    black_myth_wukong_screenshot_6 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/01_black_myth_wukong/screenshot6.jpg",
        game_id=1,
        filename="screenshot_0000000000005.png",
    )

    counter_strike_2_screenshot_1 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/02_counter_strike_2/screenshot1.jpg",
        game_id=2,
        filename="screenshot_0000000000006.png",
    )

    counter_strike_2_screenshot_2 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/02_counter_strike_2/screenshot2.jpg",
        game_id=2,
        filename="screenshot_0000000000007.png",
    )

    counter_strike_2_screenshot_3 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/02_counter_strike_2/screenshot3.jpg",
        game_id=2,
        filename="screenshot_0000000000008.png",
    )

    counter_strike_2_screenshot_4 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/02_counter_strike_2/screenshot4.jpg",
        game_id=2,
        filename="screenshot_0000000000009.png",
    )

    counter_strike_2_screenshot_5 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/02_counter_strike_2/screenshot5.jpg",
        game_id=2,
        filename="screenshot_0000000000010.png",
    )

    counter_strike_2_screenshot_6 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/02_counter_strike_2/screenshot6.jpg",
        game_id=2,
        filename="screenshot_0000000000011.png",
    )

    overwatch_2_screenshot_1 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/02_overwatch_2/screenshot1.jpg",
        game_id=2,
        filename="screenshot_0000000000012.png",
    )

    overwatch_2_screenshot_2 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/03_overwatch_2/screenshot2.jpg",
        game_id=3,
        filename="screenshot_0000000000013.png",
    )

    overwatch_2_screenshot_3 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/03_overwatch_2/screenshot3.jpg",
        game_id=3,
        filename="screenshot_0000000000014.png",
    )

    overwatch_2_screenshot_4 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/03_overwatch_2/screenshot4.jpg",
        game_id=3,
        filename="screenshot_0000000000015.png",
    )

    overwatch_2_screenshot_5 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/03_overwatch_2/screenshot5.jpg",
        game_id=3,
        filename="screenshot_0000000000016.png",
    )

    overwatch_2_screenshot_6 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/03_overwatch_2/screenshot6.jpg",
        game_id=3,
        filename="screenshot_0000000000017.png",
    )

    maplestory_screenshot_1 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/04-maplestory/screenshot1.jpg",
        game_id=4,
        filename="screenshot_0000000000018.png",
    )

    maplestory_screenshot_2 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/04-maplestory/screenshot2.jpg",
        game_id=4,
        filename="screenshot_0000000000019.png",
    )

    maplestory_screenshot_3 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/04-maplestory/screenshot3.jpg",
        game_id=4,
        filename="screenshot_0000000000020.png",
    )

    maplestory_screenshot_4 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/04-maplestory/screenshot4.jpg",
        game_id=4,
        filename="screenshot_0000000000021.png",
    )

    maplestory_screenshot_5 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/04-maplestory/screenshot5.jpg",
        game_id=4,
        filename="screenshot_0000000000022.png",
    )

    maplestory_screenshot_6 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/04-maplestory/screenshot6.jpg",
        game_id=4,
        filename="screenshot_0000000000023.png",
    )

    maplestory_screenshot_7 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/04-maplestory/screenshot7.jpg",
        game_id=4,
        filename="screenshot_0000000000024.png",
    )

    maplestory_screenshot_8 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/04-maplestory/screenshot8.jpg",
        game_id=4,
        filename="screenshot_0000000000025.png",
    )

    maplestory_screenshot_9 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/04-maplestory/screenshot9.jpg",
        game_id=4,
        filename="screenshot_0000000000026.png",
    )

    maplestory_screenshot_10 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/04-maplestory/screenshot10.jpg",
        game_id=4,
        filename="screenshot_0000000000027.png",
    )

    maplestory_screenshot_11 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/04-maplestory/screenshot11.jpg",
        game_id=4,
        filename="screenshot_0000000000028.png",
    )

    maplestory_screenshot_12 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/04-maplestory/screenshot12.jpg",
        game_id=4,
        filename="screenshot_0000000000029.png",
    )

    maplestory_screenshot_13 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/04-maplestory/screenshot13.jpg",
        game_id=4,
        filename="screenshot_0000000000030.png",
    )

    space_marine_2_screenshot_1 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/05-space-marine-2/screenshot1.jpg",
        game_id=5,
        filename="screenshot_0000000000031.png",
    )

    space_marine_2_screenshot_2 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/05-space-marine-2/screenshot2.jpg",
        game_id=5,
        filename="screenshot_0000000000032.png",
    )

    space_marine_2_screenshot_3 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/05-space-marine-2/screenshot3.jpg",
        game_id=5,
        filename="screenshot_0000000000033.png",
    )

    space_marine_2_screenshot_4 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/05-space-marine-2/screenshot4.jpg",
        game_id=5,
        filename="screenshot_0000000000034.png",
    )

    space_marine_2_screenshot_5 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/05-space-marine-2/screenshot5.jpg",
        game_id=5,
        filename="screenshot_0000000000035.png",
    )

    space_marine_2_screenshot_6 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/05-space-marine-2/screenshot6.jpg",
        game_id=5,
        filename="screenshot_0000000000036.png",
    )

    space_marine_2_screenshot_7 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/05-space-marine-2/screenshot7.jpg",
        game_id=5,
        filename="screenshot_0000000000037.png",
    )

    space_marine_2_screenshot_8 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/05-space-marine-2/screenshot8.jpg",
        game_id=5,
        filename="screenshot_0000000000038.png",
    )

    space_marine_2_screenshot_9 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/05-space-marine-2/screenshot9.jpg",
        game_id=5,
        filename="screenshot_0000000000039.png",
    )

    sin_of_a_soloar_empire_ii_screenshot_1 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/06-sin-of-a-solar-empire-ii/screenshot1.jpg",
        game_id=6,
        filename="screenshot_0000000000040.png",
    )

    sin_of_a_soloar_empire_ii_screenshot_2 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/06-sin-of-a-solar-empire-ii/screenshot2.jpg",
        game_id=6,
        filename="screenshot_0000000000041.png",
    )

    sin_of_a_soloar_empire_ii_screenshot_3 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/06-sin-of-a-solar-empire-ii/screenshot3.jpg",
        game_id=6,
        filename="screenshot_0000000000042.png",
    )

    sin_of_a_soloar_empire_ii_screenshot_4 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/06-sin-of-a-solar-empire-ii/screenshot4.jpg",
        game_id=6,
        filename="screenshot_0000000000043.png",
    )

    sin_of_a_soloar_empire_ii_screenshot_5 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/06-sin-of-a-solar-empire-ii/screenshot5.jpg",
        game_id=6,
        filename="screenshot_0000000000044.png",
    )

    sin_of_a_soloar_empire_ii_screenshot_6 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/06-sin-of-a-solar-empire-ii/screenshot6.jpg",
        game_id=6,
        filename="screenshot_0000000000045.png",
    )

    sin_of_a_soloar_empire_ii_screenshot_7 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/06-sin-of-a-solar-empire-ii/screenshot7.jpg",
        game_id=6,
        filename="screenshot_0000000000046.png",
    )

    sin_of_a_soloar_empire_ii_screenshot_8 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/06-sin-of-a-solar-empire-ii/screenshot8.jpg",
        game_id=6,
        filename="screenshot_0000000000047.png",
    )

    art_of_war_red_tides_screenshot_1 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/07-art-of-war-red-tides/screenshot1.jpg",
        game_id=7,
        filename="screenshot_0000000000048.png",
    )

    art_of_war_red_tides_screenshot_2 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/07-art-of-war-red-tides/screenshot2.jpg",
        game_id=7,
        filename="screenshot_0000000000049.png",
    )

    art_of_war_red_tides_screenshot_3 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/07-art-of-war-red-tides/screenshot3.jpg",
        game_id=7,
        filename="screenshot_0000000000050.png",
    )

    art_of_war_red_tides_screenshot_4 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/07-art-of-war-red-tides/screenshot4.jpg",
        game_id=7,
        filename="screenshot_0000000000051.png",
    )

    art_of_war_red_tides_screenshot_5 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/07-art-of-war-red-tides/screenshot5.jpg",
        game_id=7,
        filename="screenshot_0000000000052.png",
    )

    art_of_war_red_tides_screenshot_6 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/07-art-of-war-red-tides/screenshot6.jpg",
        game_id=7,
        filename="screenshot_0000000000053.png",
    )

    sid_meiers_civilization_vi_screenshot_1 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/08-sid-meiers-civilization-vi/screenshot1.jpg",
        game_id=8,
        filename="screenshot_0000000000054.png",
    )

    sid_meiers_civilization_vi_screenshot_2 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/08-sid-meiers-civilization-vi/screenshot2.jpg",
        game_id=8,
        filename="screenshot_0000000000055.png",
    )

    sid_meiers_civilization_vi_screenshot_3 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/08-sid-meiers-civilization-vi/screenshot3.jpg",
        game_id=8,
        filename="screenshot_0000000000056.png",
    )

    sid_meiers_civilization_vi_screenshot_4 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/08-sid-meiers-civilization-vi/screenshot4.jpg",
        game_id=8,
        filename="screenshot_0000000000057.png",
    )

    sid_meiers_civilization_vi_screenshot_5 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/08-sid-meiers-civilization-vi/screenshot5.jpg",
        game_id=8,
        filename="screenshot_0000000000058.png",
    )

    sid_meiers_civilization_vi_screenshot_6 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/08-sid-meiers-civilization-vi/screenshot6.jpg",
        game_id=8,
        filename="screenshot_0000000000059.png",
    )

    ultrakill_screenshot_1 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/09-ultrakill/screenshot1.jpg",
        game_id=9,
        filename="screenshot_0000000000060.png",
    )

    ultrakill_screenshot_2 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/09-ultrakill/screenshot2.jpg",
        game_id=9,
        filename="screenshot_0000000000061.png",
    )

    ultrakill_screenshot_3 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/09-ultrakill/screenshot3.jpg",
        game_id=9,
        filename="screenshot_0000000000062.png",
    )

    ultrakill_screenshot_4 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/09-ultrakill/screenshot4.jpg",
        game_id=9,
        filename="screenshot_0000000000063.png",
    )

    ultrakill_screenshot_5 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/09-ultrakill/screenshot5.jpg",
        game_id=9,
        filename="screenshot_0000000000064.png",
    )

    ultrakill_screenshot_6 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/09-ultrakill/screenshot6.jpg",
        game_id=9,
        filename="screenshot_0000000000065.png",
    )

    ultrakill_screenshot_7 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/09-ultrakill/screenshot7.jpg",
        game_id=9,
        filename="screenshot_0000000000066.png",
    )

    ultrakill_screenshot_8 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/09-ultrakill/screenshot8.jpg",
        game_id=9,
        filename="screenshot_0000000000067.png",
    )

    tactical_breach_wizards_screenshot_1 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/10-tactical-breach-wizards/screenshot1.jpg",
        game_id=10,
        filename="screenshot_0000000000068.png",
    )

    tactical_breach_wizards_screenshot_2 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/10-tactical-breach-wizards/screenshot2.jpg",
        game_id=10,
        filename="screenshot_0000000000069.png",
    )

    tactical_breach_wizards_screenshot_3 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/10-tactical-breach-wizards/screenshot3.jpg",
        game_id=10,
        filename="screenshot_0000000000070.png",
    )

    tactical_breach_wizards_screenshot_4 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/10-tactical-breach-wizards/screenshot4.jpg",
        game_id=10,
        filename="screenshot_0000000000071.png",
    )

    tactical_breach_wizards_screenshot_5 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/10-tactical-breach-wizards/screenshot5.jpg",
        game_id=10,
        filename="screenshot_0000000000072.png",
    )

    tactical_breach_wizards_screenshot_6 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/10-tactical-breach-wizards/screenshot6.jpg",
        game_id=10,
        filename="screenshot_0000000000073.png",
    )

    tactical_breach_wizards_screenshot_7 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/10-tactical-breach-wizards/screenshot7.jpg",
        game_id=10,
        filename="screenshot_0000000000074.png",
    )

    tactical_breach_wizards_screenshot_8 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/10-tactical-breach-wizards/screenshot8.jpg",
        game_id=10,
        filename="screenshot_0000000000075.png",
    )

    tactical_breach_wizards_screenshot_9 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/10-tactical-breach-wizards/screenshot9.jpg",
        game_id=10,
        filename="screenshot_0000000000076.png",
    )

    stumble_guys_screenshot_1 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/11-stumble-guys/screenshot1.jpg",
        game_id=11,
        filename="screenshot_0000000000077.png",
    )

    stumble_guys_screenshot_2 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/11-stumble-guys/screenshot2.jpg",
        game_id=11,
        filename="screenshot_0000000000078.png",
    )

    stumble_guys_screenshot_3 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/11-stumble-guys/screenshot3.jpg",
        game_id=11,
        filename="screenshot_0000000000079.png",
    )

    stumble_guys_screenshot_4 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/11-stumble-guys/screenshot4.jpg",
        game_id=11,
        filename="screenshot_0000000000080.png",
    )

    stumble_guys_screenshot_5 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/11-stumble-guys/screenshot5.jpg",
        game_id=11,
        filename="screenshot_0000000000081.png",
    )

    stumble_guys_screenshot_6 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/11-stumble-guys/screenshot6.jpg",
        game_id=11,
        filename="screenshot_0000000000082.png",
    )

    dota_2_screenshot_1 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/12-dota-2/screenshot1.jpg",
        game_id=12,
        filename="screenshot_0000000000083.png",
    )

    dota_2_screenshot_2 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/12-dota-2/screenshot2.jpg",
        game_id=12,
        filename="screenshot_0000000000084.png",
    )

    dota_2_screenshot_3 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/12-dota-2/screenshot3.jpg",
        game_id=12,
        filename="screenshot_0000000000085.png",
    )

    dota_2_screenshot_4 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/12-dota-2/screenshot4.jpg",
        game_id=12,
        filename="screenshot_0000000000086.png",
    )

    dota_2_screenshot_5 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/12-dota-2/screenshot5.jpg",
        game_id=12,
        filename="screenshot_0000000000087.png",
    )

    dota_2_screenshot_6 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/12-dota-2/screenshot6.jpg",
        game_id=12,
        filename="screenshot_0000000000088.png",
    )

    dota_2_screenshot_7 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/12-dota-2/screenshot7.jpg",
        game_id=12,
        filename="screenshot_0000000000089.png",
    )

    shapez_2_screenshot_1 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/13-shapez-2/screenshot1.jpg",
        game_id=13,
        filename="screenshot_0000000000090.png",
    )

    shapez_2_screenshot_2 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/13-shapez-2/screenshot2.jpg",
        game_id=13,
        filename="screenshot_0000000000091.png",
    )

    shapez_2_screenshot_3 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/13-shapez-2/screenshot3.jpg",
        game_id=13,
        filename="screenshot_0000000000092.png",
    )

    shapez_2_screenshot_4 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/13-shapez-2/screenshot4.jpg",
        game_id=13,
        filename="screenshot_0000000000093.png",
    )

    shapez_2_screenshot_5 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/13-shapez-2/screenshot5.jpg",
        game_id=13,
        filename="screenshot_0000000000094.png",
    )

    shapez_2_screenshot_6 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/13-shapez-2/screenshot6.jpg",
        game_id=13,
        filename="screenshot_0000000000095.png",
    )

    shapez_2_screenshot_7 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/13-shapez-2/screenshot7.jpg",
        game_id=13,
        filename="screenshot_0000000000096.png",
    )

    shapez_2_screenshot_8 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/13-shapez-2/screenshot8.jpg",
        game_id=13,
        filename="screenshot_0000000000097.png",
    )

    cult_of_the_lamb_screenshot_1 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/14-cult-of-the-lamb/screenshot1.jpg",
        game_id=14,
        filename="screenshot_0000000000098.png",
    )

    cult_of_the_lamb_screenshot_2 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/14-cult-of-the-lamb/screenshot2.jpg",
        game_id=14,
        filename="screenshot_0000000000099.png",
    )

    cult_of_the_lamb_screenshot_3 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/14-cult-of-the-lamb/screenshot3.jpg",
        game_id=14,
        filename="screenshot_0000000000100.png",
    )

    cult_of_the_lamb_screenshot_4 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/14-cult-of-the-lamb/screenshot4.jpg",
        game_id=14,
        filename="screenshot_0000000000101.png",
    )

    cult_of_the_lamb_screenshot_5 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/14-cult-of-the-lamb/screenshot5.jpg",
        game_id=14,
        filename="screenshot_0000000000102.png",
    )

    cult_of_the_lamb_screenshot_6 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/14-cult-of-the-lamb/screenshot6.jpg",
        game_id=14,
        filename="screenshot_0000000000103.png",
    )

    cult_of_the_lamb_screenshot_7 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/14-cult-of-the-lamb/screenshot7.jpg",
        game_id=14,
        filename="screenshot_0000000000104.png",
    )

    cult_of_the_lamb_screenshot_8 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/14-cult-of-the-lamb/screenshot8.jpg",
        game_id=14,
        filename="screenshot_0000000000105.png",
    )

    gundam_breaker_4_screenshot_1 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/15-gundam-breaker-4/screenshot1.jpg",
        game_id=15,
        filename="screenshot_0000000000106.png",
    )
    gundam_breaker_4_screenshot_2 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/15-gundam-breaker-4/screenshot2.jpg",
        game_id=15,
        filename="screenshot_0000000000107.png",
    )
    gundam_breaker_4_screenshot_3 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/15-gundam-breaker-4/screenshot3.jpg",
        game_id=15,
        filename="screenshot_0000000000108.png",
    )
    gundam_breaker_4_screenshot_4 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/15-gundam-breaker-4/screenshot4.jpg",
        game_id=15,
        filename="screenshot_0000000000109.png",
    )
    gundam_breaker_4_screenshot_5 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/15-gundam-breaker-4/screenshot5.jpg",
        game_id=15,
        filename="screenshot_0000000000110.png",
    )
    gundam_breaker_4_screenshot_6 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/15-gundam-breaker-4/screenshot6.jpg",
        game_id=15,
        filename="screenshot_0000000000111.png",
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
            maplestory_screenshot_1,
            maplestory_screenshot_2,
            maplestory_screenshot_3,
            maplestory_screenshot_4,
            maplestory_screenshot_5,
            maplestory_screenshot_6,
            maplestory_screenshot_7,
            maplestory_screenshot_8,
            maplestory_screenshot_9,
            maplestory_screenshot_10,
            maplestory_screenshot_11,
            maplestory_screenshot_12,
            maplestory_screenshot_13,
            space_marine_2_screenshot_1,
            space_marine_2_screenshot_2,
            space_marine_2_screenshot_3,
            space_marine_2_screenshot_4,
            space_marine_2_screenshot_5,
            space_marine_2_screenshot_6,
            space_marine_2_screenshot_7,
            space_marine_2_screenshot_8,
            space_marine_2_screenshot_9,
            sin_of_a_soloar_empire_ii_screenshot_1,
            sin_of_a_soloar_empire_ii_screenshot_2,
            sin_of_a_soloar_empire_ii_screenshot_3,
            sin_of_a_soloar_empire_ii_screenshot_4,
            sin_of_a_soloar_empire_ii_screenshot_5,
            sin_of_a_soloar_empire_ii_screenshot_6,
            sin_of_a_soloar_empire_ii_screenshot_7,
            sin_of_a_soloar_empire_ii_screenshot_8,
            art_of_war_red_tides_screenshot_1,
            art_of_war_red_tides_screenshot_2,
            art_of_war_red_tides_screenshot_3,
            art_of_war_red_tides_screenshot_4,
            art_of_war_red_tides_screenshot_5,
            art_of_war_red_tides_screenshot_6,
            sid_meiers_civilization_vi_screenshot_1,
            sid_meiers_civilization_vi_screenshot_2,
            sid_meiers_civilization_vi_screenshot_3,
            sid_meiers_civilization_vi_screenshot_4,
            sid_meiers_civilization_vi_screenshot_5,
            sid_meiers_civilization_vi_screenshot_6,
            ultrakill_screenshot_1,
            ultrakill_screenshot_2,
            ultrakill_screenshot_3,
            ultrakill_screenshot_4,
            ultrakill_screenshot_5,
            ultrakill_screenshot_6,
            ultrakill_screenshot_7,
            ultrakill_screenshot_8,
            tactical_breach_wizards_screenshot_1,
            tactical_breach_wizards_screenshot_2,
            tactical_breach_wizards_screenshot_3,
            tactical_breach_wizards_screenshot_4,
            tactical_breach_wizards_screenshot_5,
            tactical_breach_wizards_screenshot_6,
            tactical_breach_wizards_screenshot_7,
            tactical_breach_wizards_screenshot_8,
            tactical_breach_wizards_screenshot_9,
            stumble_guys_screenshot_1,
            stumble_guys_screenshot_2,
            stumble_guys_screenshot_3,
            stumble_guys_screenshot_4,
            stumble_guys_screenshot_5,
            stumble_guys_screenshot_6,
            dota_2_screenshot_1,
            dota_2_screenshot_2,
            dota_2_screenshot_3,
            dota_2_screenshot_4,
            dota_2_screenshot_5,
            dota_2_screenshot_6,
            dota_2_screenshot_7,
            shapez_2_screenshot_1,
            shapez_2_screenshot_2,
            shapez_2_screenshot_3,
            shapez_2_screenshot_4,
            shapez_2_screenshot_5,
            shapez_2_screenshot_6,
            shapez_2_screenshot_7,
            shapez_2_screenshot_8,
            cult_of_the_lamb_screenshot_1,
            cult_of_the_lamb_screenshot_2,
            cult_of_the_lamb_screenshot_3,
            cult_of_the_lamb_screenshot_4,
            cult_of_the_lamb_screenshot_5,
            cult_of_the_lamb_screenshot_6,
            cult_of_the_lamb_screenshot_7,
            cult_of_the_lamb_screenshot_8,
            gundam_breaker_4_screenshot_1,
            gundam_breaker_4_screenshot_2,
            gundam_breaker_4_screenshot_3,
            gundam_breaker_4_screenshot_4,
            gundam_breaker_4_screenshot_5,
            gundam_breaker_4_screenshot_6,
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
