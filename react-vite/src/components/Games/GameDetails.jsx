import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { thunkGameGetId } from "../../redux/game";
import { BiLogoWindows } from "react-icons/bi";
import "./GameDetails.css";


function GameDetails() {
  const dispatch = useDispatch();
  const { gameId } = useParams();
  const game = useSelector(state => state.game[gameId])
  console.log("🚀 ~ GameDetails ~ game:", game)

  useEffect(() => {
    dispatch(thunkGameGetId(gameId))
  }, [dispatch])

  return (
    <section id="container-game-details-page">
      <div id="container-game-details-page-inner">

        <div id="container-game-carousel-game-details">
          <div id="container-game-carousel-game-details-left">
            <h1 style={{ color: "white", fontSize: "2rem" }}>{game?.title}</h1>
            <img id="main-image-game-details" />

            <div id="container-thumbnails-game-details">
              <div>video</div>
              <img className="screenshot-game-details" alt="screenshot" />
              <img className="screenshot-game-details" alt="screenshot" />
              <img className="screenshot-game-details" alt="screenshot" />
              <img className="screenshot-game-details" alt="screenshot" />
            </div>
          </div>

          <div id="container-game-carousel-game-details-right">
            <img src={game?.cover_art?.[0]?.cover_art_url} alt="cover-art" />
            <p>{game?.description}</p>

            <div id="container-description-game-details">
              <div id="container-description-game-details-left">
                <span>POSITIVE REVIEWS:</span>
                <span>NEGATIVE REVIEWS:</span>
                <span>RELEASE DATE:</span>
                <span>DEVELOPER:</span>
              </div>

              <div id="container-description-game-details-right">
                <span>50,000 reviews</span>
                <span>310 reviews</span>
                <span>{game?.release_date.split("00")[0].trim()}</span>
                <span style={{ color: "#67C1F5", fontWeight: "bold", fontSize: "12px" }}>{game?.user?.username}</span>
              </div>
            </div>

            <div id="container-categories-game-details">
              <span style={{ color: "#556772", fontSize: "11px" }}>CATEGORIES:</span>

              <div id="container-tags-game-details">
                <span className="tags">Role Playing</span >
                <span className="tags">Story-Rich</span>
                <span className="tags">Adventure</span>
                <span className="tags">Action</span>
              </div>

            </div>
          </div>
        </div>


        <div>
          <div>
            <div>
              <h2>Buy Game Title</h2>
              <BiLogoWindows />
              <div>
                <span>$PRICE</span>
                <button>Add to Cart</button>
              </div>
            </div>

            <div>
              <h4>ABOUT THIS GAME</h4>
              <p>This game is about...</p>
            </div>

            <div>
              <h4>SYSTEM REQUIREMENTS</h4>
            </div>
          </div>

          <div>Right side</div>
        </div>

        <h4>CUSTOMER REVIEWS</h4>
      </div>
    </section>
  );
}


export default GameDetails;
