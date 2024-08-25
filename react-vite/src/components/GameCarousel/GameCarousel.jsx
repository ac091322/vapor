import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiSolidChevronLeft } from "react-icons/bi";
import { BiSolidChevronRight } from "react-icons/bi";
import { thunkGamesGet } from "../../redux/game";
import "./GameCarousel.css";


function GameCarousel() {
  const dispatch = useDispatch();

  const gamesObj = useSelector(state => state.game);
  const games = Object.values(gamesObj)

  useEffect(() => {
    dispatch(thunkGamesGet());
  }, [dispatch]);

  return (
    <div id="container-game-carousel">
      <h3>FEATURED AND RECOMMENDED</h3>

      {games?.map(game => (
        <React.Fragment key={game.id}>
          <div id="container-game-carousel-left">
            <img
              style={{ height: "100%", width: "100%" }}
              src={game.cover_art?.[0]?.cover_art_url}
              alt={`${game.title} cover art`}
            />
          </div>

          <div id="container-game-carousel-right">
            <div id="container-game-title-carousel">
              <h2 style={{ paddingLeft: "20px" }}>{game.title}</h2>
            </div>

            <div id="container-screenshots-grid">
              <img />
              <img />
              <img />
              <img />
            </div>
            <div id="container-promotion-text-tag">
              <span style={{ fontSize: "20px" }}>Now available!</span>
              <span id="tag-top-seller">Top Seller</span>
            </div>
          </div >
        </React.Fragment>
      ))}

      <div
        id="carousel-left-button"
        className="carousel-left-right-buttons"
      >
        <BiSolidChevronLeft className="carousel-arrows" />
      </div>
      <div
        id="carousel-right-button"
        className="carousel-left-right-buttons"
      >
        <BiSolidChevronRight className="carousel-arrows" />
      </div>

    </div >
  );
}


export default GameCarousel;
