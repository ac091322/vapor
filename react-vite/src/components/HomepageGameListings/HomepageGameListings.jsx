import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { thunkGamesGet } from "../../redux/game";
import { thunkScreenshotsGet } from "../../redux/screenshot";
import screenshotPlaceholder from "../../../public/screenshot-placeholder.png"
import "./HomepageGameListings.css"


function HomepageGameListings() {
  const dispatch = useDispatch();
  const gamesObj = useSelector(state => state.game);
  const games = Object.values(gamesObj);

  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    dispatch(thunkGamesGet());
    dispatch(thunkScreenshotsGet);
  }, [dispatch]);

  return (
    <section id="container-game-listing-component">

      <div id="container-game-listing">

        <div id="container-game-listing-left">
          <div className="tab-title-game-listings">New & Trending</div>

          {games?.map(game => (
            <Link
              style={selectedGame === game.id ? { backgroundColor: "rgb(151, 187, 210)", opacity: "1" } : { backgroundColor: "" }}
              key={game.id}
              to={`/games/${game.id}`}
              id="container-game-listing-bar"
              onMouseOver={() => setSelectedGame(game.id)}
              onMouseOut={() => setSelectedGame(null)}
            >

              {game?.screenshots?.[0]?.screenshot_url
                ? (
                  <img
                    src={game.screenshots?.[0]?.screenshot_url} alt="game-screenshot"
                    style={{ width: "162px", height: "69px" }}
                  />
                ) : (
                  <img
                    src={screenshotPlaceholder} alt="screenshot-placeholder"
                    style={{ width: "162px", height: "69px" }}
                  />)}


              <div id="container-game-listing-details-left">
                <div id="container-game-listing-details-left-inner">
                  <span style={selectedGame === game.id ? { color: "var(--nav-background-color)" } : { color: "#C7D5E0" }}>{game.title}</span>
                  <span style={{ color: "#384959", fontSize: "12px" }}>Mythology, Action RPG, Action, RPG</span>
                </div>

                <span style={selectedGame === game.id ? { color: "var(--nav-background-color)" } : { color: "white" }}>${game.price}</span>
                <span style={{
                  position: "absolute",
                  color: "#4C6C8C",
                  fontSize: "12px",
                  right: "0",
                  bottom: "0",
                  paddingBottom: "3px"
                }}>
                  {game.release_date.split("00")[0].trim()}
                </span>

                {selectedGame === game.id &&
                  <div style={{
                    backgroundColor: "rgb(151, 187, 210)",
                    height: "69px",
                    width: "12px",
                    position: "absolute",
                    right: "-23px",
                  }} />}
              </div>
            </Link>
          ))}

          <div id="container-game-listing-right">

            {/* <span>{game.title}</span> */}

          </div>
        </div>


      </div>
    </section>
  );
}


export default HomepageGameListings
