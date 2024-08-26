import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiSolidChevronLeft } from "react-icons/bi";
import { BiSolidChevronRight } from "react-icons/bi";
import { thunkGamesGet } from "../../redux/game";
import { thunkScreenshotsGetAll } from "../../redux/screenshot";
import screenshotPlaceholder from "../../../public/screenshot-placeholder.png"
import "./GameCarousel.css";


function GameCarousel() {
  const dispatch = useDispatch();
  const gamesObj = useSelector(state => state.game);
  const gameKeys = Object.keys(gamesObj);
  const screenshotsObj = useSelector(state => state.screenshot);
  const screenshots = Object.values(screenshotsObj);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    dispatch(thunkGamesGet());
    dispatch(thunkScreenshotsGetAll());
  }, [dispatch]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === gameKeys.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? gameKeys.length - 1 : prevIndex - 1
    );
  };

  const currentGame = gamesObj[gameKeys[currentIndex]];
  const filteredScreenshots = screenshots?.filter(screenshot => screenshot.game_id === currentGame?.id);

  const firstScreenshot = filteredScreenshots?.length > 0 ? filteredScreenshots[0].screenshot_url : "";
  const secondScreenshot = filteredScreenshots?.length > 1 ? filteredScreenshots[1].screenshot_url : "";
  const thirdScreenshot = filteredScreenshots?.length > 2 ? filteredScreenshots[2].screenshot_url : "";
  const fourthScreenshot = filteredScreenshots?.length > 3 ? filteredScreenshots[3].screenshot_url : "";

  return (
    <div id="container-game-carousel">
      <h3>FEATURED AND RECOMMENDED</h3>

      {currentGame
        && (
          <>
            <Link
              to={`/games/${currentGame.id}`}
              id="container-game-carousel-left"
            >
              {filteredScreenshots.length > 0
                ? <img
                  style={{ height: "100%", width: "100%", boxShadow: "10px 0 15px black" }}
                  src={firstScreenshot}
                  alt={`${currentGame.title} cover art`}
                />
                : <img
                  style={{ height: "100%", width: "100%", boxShadow: "10px 0 15px black" }}
                  src={screenshotPlaceholder}
                  alt={`${currentGame.title} cover art`}
                />}

            </Link>

            <Link
              to={`/games/${currentGame.id}`}
              id="container-game-carousel-right"
            >
              <div id="container-game-title-carousel">
                <h2 style={{ padding: "10px 25px 0 20px" }}>{currentGame.title}</h2>
              </div>

              <div id="container-screenshots-grid">
                <div className="screenshot-container-game-carousel">
                  {filteredScreenshots.length > 0
                    ? <img src={firstScreenshot} alt="screenshot" />
                    : <img src={screenshotPlaceholder} alt="screenshot" />}
                </div>
                <div className="screenshot-container-game-carousel">
                  {filteredScreenshots.length > 0
                    ? <img src={secondScreenshot} alt="screenshot" />
                    : <img src={screenshotPlaceholder} alt="screenshot" />}
                </div>
                <div className="screenshot-container-game-carousel">
                  {filteredScreenshots.length > 0
                    ? <img src={thirdScreenshot} alt="screenshot" />
                    : <img src={screenshotPlaceholder} alt="screenshot" />}
                </div>
                <div className="screenshot-container-game-carousel">
                  {filteredScreenshots.length > 0
                    ? <img src={fourthScreenshot} alt="screenshot" />
                    : <img src={screenshotPlaceholder} alt="screenshot" />}
                </div>
              </div>
              <div id="container-promotion-text-tag">
                <span style={{ fontSize: "20px" }}>Now available!</span>
                <span id="tag-top-seller">Top Seller</span>
              </div>
            </Link>
          </>
        )
      }

      <div
        id="carousel-left-button"
        className="carousel-left-right-buttons"
        onClick={handlePrev}
      >
        <BiSolidChevronLeft className="carousel-arrows" />
      </div>
      <div
        id="carousel-right-button"
        className="carousel-left-right-buttons"
        onClick={handleNext}
      >
        <BiSolidChevronRight className="carousel-arrows" />
      </div>
    </div >
  );
}


export default GameCarousel;
