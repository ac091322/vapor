from app.models import db, environment, SCHEMA, Screenshot
from sqlalchemy.sql import text


def seed_screenshots():

    black_myth_wukong_screenshot_1 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/01_black_myth_wukong/screenshot1.jpg",
        game_id=1,
        filename="screenshot_1724703873660.png",
    )

    black_myth_wukong_screenshot_2 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/01_black_myth_wukong/screenshot2.jpg",
        game_id=1,
        filename="screenshot_1724703873661.png",
    )

    black_myth_wukong_screenshot_3 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/01_black_myth_wukong/screenshot3.jpg",
        game_id=1,
        filename="screenshot_1724703873662.png",
    )

    black_myth_wukong_screenshot_4 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/01_black_myth_wukong/screenshot4.jpg",
        game_id=1,
        filename="screenshot_1724703873663.png",
    )

    black_myth_wukong_screenshot_5 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/01_black_myth_wukong/screenshot5.jpg",
        game_id=1,
        filename="screenshot_1724703873664.png",
    )

    black_myth_wukong_screenshot_6 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/01_black_myth_wukong/screenshot6.jpg",
        game_id=1,
        filename="screenshot_1724703873665.png",
    )

    counter_strike_2_screenshot_1 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/02_counter_strike_2/screenshot1.jpg",
        game_id=2,
        filename="screenshot_1724703873666.png",
    )

    counter_strike_2_screenshot_2 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/02_counter_strike_2/screenshot2.jpg",
        game_id=2,
        filename="screenshot_1724703873667.png",
    )

    counter_strike_2_screenshot_3 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/02_counter_strike_2/screenshot3.jpg",
        game_id=2,
        filename="screenshot_1724703873668.png",
    )

    counter_strike_2_screenshot_4 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/02_counter_strike_2/screenshot4.jpg",
        game_id=2,
        filename="screenshot_1724703873669.png",
    )

    counter_strike_2_screenshot_5 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/02_counter_strike_2/screenshot5.jpg",
        game_id=2,
        filename="screenshot_1724703873670.png",
    )

    counter_strike_2_screenshot_6 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/02_counter_strike_2/screenshot6.jpg",
        game_id=2,
        filename="screenshot_1724703873671.png",
    )

    overwatch_2_screenshot_1 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/02_overwatch_2/screenshot1.jpg",
        game_id=2,
        filename="screenshot_1724703873672.png",
    )

    overwatch_2_screenshot_2 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/03_overwatch_2/screenshot2.jpg",
        game_id=3,
        filename="screenshot_1724703873673.png",
    )

    overwatch_2_screenshot_3 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/03_overwatch_2/screenshot3.jpg",
        game_id=3,
        filename="screenshot_1724703873674.png",
    )

    overwatch_2_screenshot_4 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/03_overwatch_2/screenshot4.jpg",
        game_id=3,
        filename="screenshot_1724703873675.png",
    )

    overwatch_2_screenshot_5 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/03_overwatch_2/screenshot5.jpg",
        game_id=3,
        filename="screenshot_1724703873676.png",
    )

    overwatch_2_screenshot_6 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/03_overwatch_2/screenshot6.jpg",
        game_id=3,
        filename="screenshot_1724703873677.png",
    )

    maplestory_screenshot_1 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/04-maplestory/screenshot1.jpg",
        game_id=4,
        filename="screenshot_1724703873678.png",
    )

    maplestory_screenshot_2 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/04-maplestory/screenshot2.jpg",
        game_id=4,
        filename="screenshot_1724703873679.png",
    )

    maplestory_screenshot_3 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/04-maplestory/screenshot3.jpg",
        game_id=4,
        filename="screenshot_1724703873680.png",
    )

    maplestory_screenshot_4 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/04-maplestory/screenshot4.jpg",
        game_id=4,
        filename="screenshot_1724703873681.png",
    )

    maplestory_screenshot_5 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/04-maplestory/screenshot5.jpg",
        game_id=4,
        filename="screenshot_1724703873682.png",
    )

    maplestory_screenshot_6 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/04-maplestory/screenshot6.jpg",
        game_id=4,
        filename="screenshot_1724703873683.png",
    )

    maplestory_screenshot_7 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/04-maplestory/screenshot7.jpg",
        game_id=4,
        filename="screenshot_1724703873684.png",
    )

    maplestory_screenshot_8 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/04-maplestory/screenshot8.jpg",
        game_id=4,
        filename="screenshot_1724703873685.png",
    )

    maplestory_screenshot_9 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/04-maplestory/screenshot9.jpg",
        game_id=4,
        filename="screenshot_1724703873686.png",
    )

    maplestory_screenshot_10 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/04-maplestory/screenshot10.jpg",
        game_id=4,
        filename="screenshot_1724703873687.png",
    )

    maplestory_screenshot_11 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/04-maplestory/screenshot11.jpg",
        game_id=4,
        filename="screenshot_1724703873688.png",
    )

    maplestory_screenshot_12 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/04-maplestory/screenshot12.jpg",
        game_id=4,
        filename="screenshot_1724703873689.png",
    )

    maplestory_screenshot_13 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/04-maplestory/screenshot13.jpg",
        game_id=4,
        filename="screenshot_1724703873690.png",
    )

    space_marine_2_screenshot_1 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/05-space-marine-2/screenshot1.jpg",
        game_id=5,
        filename="screenshot_1724703873691.png",
    )

    space_marine_2_screenshot_2 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/05-space-marine-2/screenshot2.jpg",
        game_id=5,
        filename="screenshot_1724703873692.png",
    )

    space_marine_2_screenshot_3 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/05-space-marine-2/screenshot3.jpg",
        game_id=5,
        filename="screenshot_1724703873693.png",
    )

    space_marine_2_screenshot_4 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/05-space-marine-2/screenshot4.jpg",
        game_id=5,
        filename="screenshot_1724703873694.png",
    )

    space_marine_2_screenshot_5 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/05-space-marine-2/screenshot5.jpg",
        game_id=5,
        filename="screenshot_1724703873695.png",
    )

    space_marine_2_screenshot_6 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/05-space-marine-2/screenshot6.jpg",
        game_id=5,
        filename="screenshot_1724703873696.png",
    )

    space_marine_2_screenshot_7 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/05-space-marine-2/screenshot7.jpg",
        game_id=5,
        filename="screenshot_1724703873697.png",
    )

    space_marine_2_screenshot_8 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/05-space-marine-2/screenshot8.jpg",
        game_id=5,
        filename="screenshot_1724703873698.png",
    )

    space_marine_2_screenshot_9 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/05-space-marine-2/screenshot9.jpg",
        game_id=5,
        filename="screenshot_1724703873699.png",
    )

    sin_of_a_soloar_empire_ii_screenshot_1 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/06-sin-of-a-solar-empire-ii/screenshot1.jpg",
        game_id=6,
        filename="screenshot_1724703873700.png",
    )

    sin_of_a_soloar_empire_ii_screenshot_2 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/06-sin-of-a-solar-empire-ii/screenshot2.jpg",
        game_id=6,
        filename="screenshot_1724703873701.png",
    )

    sin_of_a_soloar_empire_ii_screenshot_3 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/06-sin-of-a-solar-empire-ii/screenshot3.jpg",
        game_id=6,
        filename="screenshot_1724703873702.png",
    )

    sin_of_a_soloar_empire_ii_screenshot_4 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/06-sin-of-a-solar-empire-ii/screenshot4.jpg",
        game_id=6,
        filename="screenshot_1724703873703.png",
    )

    sin_of_a_soloar_empire_ii_screenshot_5 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/06-sin-of-a-solar-empire-ii/screenshot5.jpg",
        game_id=6,
        filename="screenshot_1724703873704.png",
    )

    sin_of_a_soloar_empire_ii_screenshot_6 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/06-sin-of-a-solar-empire-ii/screenshot6.jpg",
        game_id=6,
        filename="screenshot_1724703873705.png",
    )

    sin_of_a_soloar_empire_ii_screenshot_7 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/06-sin-of-a-solar-empire-ii/screenshot7.jpg",
        game_id=6,
        filename="screenshot_1724703873706.png",
    )

    sin_of_a_soloar_empire_ii_screenshot_8 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/06-sin-of-a-solar-empire-ii/screenshot8.jpg",
        game_id=6,
        filename="screenshot_1724703873707.png",
    )

    art_of_war_red_tides_screenshot_1 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/07-art-of-war-red-tides/screenshot1.jpg",
        game_id=7,
        filename="screenshot_1724703873708.png",
    )

    art_of_war_red_tides_screenshot_2 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/07-art-of-war-red-tides/screenshot2.jpg",
        game_id=7,
        filename="screenshot_1724703873709.png",
    )

    art_of_war_red_tides_screenshot_3 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/07-art-of-war-red-tides/screenshot3.jpg",
        game_id=7,
        filename="screenshot_1724703873710.png",
    )

    art_of_war_red_tides_screenshot_4 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/07-art-of-war-red-tides/screenshot4.jpg",
        game_id=7,
        filename="screenshot_1724703873711.png",
    )

    art_of_war_red_tides_screenshot_5 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/07-art-of-war-red-tides/screenshot5.jpg",
        game_id=7,
        filename="screenshot_1724703873712.png",
    )

    art_of_war_red_tides_screenshot_6 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/07-art-of-war-red-tides/screenshot6.jpg",
        game_id=7,
        filename="screenshot_1724703873708.png",
    )

    sid_meiers_civilization_vi_screenshot_1 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/08-sid-meiers-civilization-vi/screenshot1.jpg",
        game_id=8,
        filename="screenshot_1724703873709.png",
    )

    sid_meiers_civilization_vi_screenshot_2 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/08-sid-meiers-civilization-vi/screenshot2.jpg",
        game_id=8,
        filename="screenshot_1724703873710.png",
    )

    sid_meiers_civilization_vi_screenshot_3 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/08-sid-meiers-civilization-vi/screenshot3.jpg",
        game_id=8,
        filename="screenshot_1724703873711.png",
    )

    sid_meiers_civilization_vi_screenshot_4 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/08-sid-meiers-civilization-vi/screenshot4.jpg",
        game_id=8,
        filename="screenshot_1724703873712.png",
    )

    sid_meiers_civilization_vi_screenshot_5 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/08-sid-meiers-civilization-vi/screenshot5.jpg",
        game_id=8,
        filename="screenshot_1724703873713.png",
    )

    sid_meiers_civilization_vi_screenshot_6 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/08-sid-meiers-civilization-vi/screenshot6.jpg",
        game_id=8,
        filename="screenshot_1724703873714.png",
    )

    ultrakill_screenshot_1 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/09-ultrakill/screenshot1.jpg",
        game_id=9,
        filename="screenshot_1724703873715.png",
    )

    ultrakill_screenshot_2 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/09-ultrakill/screenshot2.jpg",
        game_id=9,
        filename="screenshot_1724703873716.png",
    )

    ultrakill_screenshot_3 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/09-ultrakill/screenshot3.jpg",
        game_id=9,
        filename="screenshot_1724703873717.png",
    )

    ultrakill_screenshot_4 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/09-ultrakill/screenshot4.jpg",
        game_id=9,
        filename="screenshot_1724703873718.png",
    )

    ultrakill_screenshot_5 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/09-ultrakill/screenshot5.jpg",
        game_id=9,
        filename="screenshot_1724703873719.png",
    )

    ultrakill_screenshot_6 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/09-ultrakill/screenshot6.jpg",
        game_id=9,
        filename="screenshot_1724703873720.png",
    )

    ultrakill_screenshot_7 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/09-ultrakill/screenshot7.jpg",
        game_id=9,
        filename="screenshot_1724703873721.png",
    )

    ultrakill_screenshot_8 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/09-ultrakill/screenshot8.jpg",
        game_id=9,
        filename="screenshot_1724703873722.png",
    )

    tactical_breach_wizards_screenshot_1 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/10-tactical-breach-wizards/screenshot1.jpg",
        game_id=10,
        filename="screenshot_1724703873723.png",
    )

    tactical_breach_wizards_screenshot_2 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/10-tactical-breach-wizards/screenshot2.jpg",
        game_id=10,
        filename="screenshot_1724703873724.png",
    )

    tactical_breach_wizards_screenshot_3 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/10-tactical-breach-wizards/screenshot3.jpg",
        game_id=10,
        filename="screenshot_1724703873725.png",
    )

    tactical_breach_wizards_screenshot_4 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/10-tactical-breach-wizards/screenshot4.jpg",
        game_id=10,
        filename="screenshot_1724703873726.png",
    )

    tactical_breach_wizards_screenshot_5 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/10-tactical-breach-wizards/screenshot5.jpg",
        game_id=10,
        filename="screenshot_1724703873727.png",
    )

    tactical_breach_wizards_screenshot_6 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/10-tactical-breach-wizards/screenshot6.jpg",
        game_id=10,
        filename="screenshot_1724703873728.png",
    )

    tactical_breach_wizards_screenshot_7 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/10-tactical-breach-wizards/screenshot7.jpg",
        game_id=10,
        filename="screenshot_1724703873729.png",
    )

    tactical_breach_wizards_screenshot_8 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/10-tactical-breach-wizards/screenshot8.jpg",
        game_id=10,
        filename="screenshot_1724703873730.png",
    )

    tactical_breach_wizards_screenshot_9 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/10-tactical-breach-wizards/screenshot9.jpg",
        game_id=10,
        filename="screenshot_1724703873731.png",
    )

    stumble_guys_screenshot_1 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/11-stumble-guys/screenshot1.jpg",
        game_id=11,
        filename="screenshot_1724703873732.png",
    )

    stumble_guys_screenshot_2 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/11-stumble-guys/screenshot2.jpg",
        game_id=11,
        filename="screenshot_1724703873733.png",
    )

    stumble_guys_screenshot_3 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/11-stumble-guys/screenshot3.jpg",
        game_id=11,
        filename="screenshot_1724703873734.png",
    )

    stumble_guys_screenshot_4 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/11-stumble-guys/screenshot4.jpg",
        game_id=11,
        filename="screenshot_1724703873735.png",
    )

    stumble_guys_screenshot_5 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/11-stumble-guys/screenshot5.jpg",
        game_id=11,
        filename="screenshot_1724703873736.png",
    )

    stumble_guys_screenshot_6 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/11-stumble-guys/screenshot6.jpg",
        game_id=11,
        filename="screenshot_1724703873737.png",
    )

    dota_2_screenshot_1 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/12-dota-2/screenshot1.jpg",
        game_id=12,
        filename="screenshot_1724703873738.png",
    )

    dota_2_screenshot_2 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/12-dota-2/screenshot2.jpg",
        game_id=12,
        filename="screenshot_1724703873739.png",
    )

    dota_2_screenshot_3 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/12-dota-2/screenshot3.jpg",
        game_id=12,
        filename="screenshot_1724703873740.png",
    )

    dota_2_screenshot_4 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/12-dota-2/screenshot4.jpg",
        game_id=12,
        filename="screenshot_1724703873741.png",
    )

    dota_2_screenshot_5 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/12-dota-2/screenshot5.jpg",
        game_id=12,
        filename="screenshot_1724703873742.png",
    )

    dota_2_screenshot_6 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/12-dota-2/screenshot6.jpg",
        game_id=12,
        filename="screenshot_1724703873743.png",
    )

    dota_2_screenshot_7 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/12-dota-2/screenshot7.jpg",
        game_id=12,
        filename="screenshot_1724703873744.png",
    )

    shapez_2_screenshot_1 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/13-shapez-2/screenshot1.jpg",
        game_id=13,
        filename="screenshot_1724703873745.png",
    )

    shapez_2_screenshot_2 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/13-shapez-2/screenshot2.jpg",
        game_id=13,
        filename="screenshot_17247038737456.png",
    )

    shapez_2_screenshot_3 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/13-shapez-2/screenshot3.jpg",
        game_id=13,
        filename="screenshot_1724703873747.png",
    )

    shapez_2_screenshot_4 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/13-shapez-2/screenshot4.jpg",
        game_id=13,
        filename="screenshot_1724703873748.png",
    )

    shapez_2_screenshot_5 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/13-shapez-2/screenshot5.jpg",
        game_id=13,
        filename="screenshot_1724703873749.png",
    )

    shapez_2_screenshot_6 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/13-shapez-2/screenshot6.jpg",
        game_id=13,
        filename="screenshot_1724703873750.png",
    )

    shapez_2_screenshot_7 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/13-shapez-2/screenshot7.jpg",
        game_id=13,
        filename="screenshot_1724703873751.png",
    )

    shapez_2_screenshot_8 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/13-shapez-2/screenshot8.jpg",
        game_id=13,
        filename="screenshot_1724703873752.png",
    )

    cult_of_the_lamb_screenshot_1 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/14-cult-of-the-lamb/screenshot1.jpg",
        game_id=14,
        filename="screenshot_1724703873753.png",
    )

    cult_of_the_lamb_screenshot_2 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/14-cult-of-the-lamb/screenshot2.jpg",
        game_id=14,
        filename="screenshot_1724703873754.png",
    )

    cult_of_the_lamb_screenshot_3 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/14-cult-of-the-lamb/screenshot3.jpg",
        game_id=14,
        filename="screenshot_1724703873755.png",
    )

    cult_of_the_lamb_screenshot_4 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/14-cult-of-the-lamb/screenshot4.jpg",
        game_id=14,
        filename="screenshot_1724703873756.png",
    )

    cult_of_the_lamb_screenshot_5 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/14-cult-of-the-lamb/screenshot5.jpg",
        game_id=14,
        filename="screenshot_1724703873757.png",
    )

    cult_of_the_lamb_screenshot_6 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/14-cult-of-the-lamb/screenshot6.jpg",
        game_id=14,
        filename="screenshot_1724703873758.png",
    )

    cult_of_the_lamb_screenshot_7 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/14-cult-of-the-lamb/screenshot7.jpg",
        game_id=14,
        filename="screenshot_1724703873759.png",
    )

    cult_of_the_lamb_screenshot_8 = Screenshot(
        screenshot_url="https://vapor-ac.s3.amazonaws.com/14-cult-of-the-lamb/screenshot8.jpg",
        game_id=14,
        filename="screenshot_1724703873760.png",
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
