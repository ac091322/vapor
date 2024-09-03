import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { thunkGamesGet } from "../../redux/game";
import { thunkWishlistGameAdd, thunkWishlistUserGet, thunkWishlistGameRemove } from "../../redux/wishlist";
import { thunkScreenshotsGet } from "../../redux/screenshot";
import screenshotPlaceholder from "../../../public/screenshot-placeholder.png"
import "./HomepageGameListings.css"


function HomepageGameListings() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(state => state.session.user);
  const gamesObj = useSelector(state => state.game);
  const games = Object.values(gamesObj);
  const wishlistObj = useSelector(state => state.wishlist);
  const myWishlist = Object.values(wishlistObj);

  const [selectedGame, setSelectedGame] = useState(null);

  useEffect(() => {
    if (games.length > 0 && selectedGame === null) {
      setSelectedGame(games[0].id);
    }
  }, [games, selectedGame]);

  useEffect(() => {
    dispatch(thunkGamesGet());
    dispatch(thunkScreenshotsGet);
  }, [dispatch]);

  const addGameToWishlist = (gameId) => {
    dispatch(thunkWishlistGameAdd(gameId))
      .then(() => dispatch(thunkWishlistUserGet()));
  };

  const removeGameFromWishlist = (gameId) => {
    dispatch(thunkWishlistGameRemove(gameId));
  };

  const selectedGameDisplay = games.find(game => game?.id === selectedGame);

  const countThumbsUpDown = () => {
    let thumbsUp = 0;
    let thumbsDown = 0;

    selectedGameDisplay?.reviews?.forEach(review => {
      if (review.thumbs_up) thumbsUp++;
      if (review.thumbs_down) thumbsDown++;
    });

    return { thumbsUp, thumbsDown };
  };

  const thumbsCount = selectedGameDisplay ? countThumbsUpDown(selectedGameDisplay.reviews) : { thumbsUp: 0, thumbsDown: 0 };

  return (
    <section id="container-game-listing-component">
      <div id="container-game-listing">

        <div id="container-game-listing-left">
          <div className="tab-title-game-listings">Top 10 New & Trending</div>

          {games?.sort((a, b) => (b.id) - (a.id))
            .slice(0, 10)
            .map(game => (
              <Link
                style={selectedGame === game.id ? { backgroundColor: "rgb(151, 187, 210)", opacity: "1" } : { backgroundColor: "" }}
                key={game.id}
                to={`/games/${game.id}`}
                id="container-game-listing-bar"
                onMouseOver={() => setSelectedGame(game.id)}
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
                    <span style={selectedGame === game?.id ? { color: "var(--nav-background-color)" } : { color: "#C7D5E0" }}>{game?.title}</span>
                    <span style={{ color: "#384959", fontSize: "12px" }}>Mythology, Action RPG, Action, RPG</span>
                  </div>

                  <span style={selectedGame === game?.id ? { color: "var(--nav-background-color)" } : { color: "white" }}>${game?.price}</span>
                  <span style={{
                    position: "absolute",
                    color: "#4C6C8C",
                    fontSize: "12px",
                    right: "0",
                    bottom: "0",
                    paddingBottom: "3px"
                  }}>
                    {game?.release_date.split("00")[0].trim()}
                  </span>

                  {selectedGame === game?.id &&
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

        </div>

        <div id="container-game-listing-right">
          <span style={{
            color: "var(--nav-background-color)",
            fontSize: "20px",
            overflow: "hidden",
            textOverflow: "ellipsis"
          }}
          >
            {selectedGameDisplay?.title}
          </span>

          <div id="container-overall-reviews">
            <span> Overall user reviews: {selectedGameDisplay?.reviews ? selectedGameDisplay?.reviews?.length : 0}</span>
            <span>Positive reviews: {thumbsCount?.thumbsUp}</span>
            <span>Negative reviews: {thumbsCount?.thumbsDown}</span>
          </div>

          <div id="container-genre-tags-game-listing">
            <span className="tags-game-listing">Role Playing</span >
            <span className="tags-game-listing">Story-Rich</span>
            <span className="tags-game-listing">Adventure</span>
            <span className="tags-game-listing">Action</span>
          </div>

          <div id="container-screenshots-game-listing">
            {selectedGameDisplay?.screenshots?.slice(0, 3)
              .map(screenshot => (
                <img
                  key={screenshot.id}
                  style={{ width: "100%", height: "157.12px" }}
                  src={screenshot.screenshot_url} alt="screenshot" />
              ))}
          </div>

          {currentUser
            ? (
              selectedGameDisplay?.user.user_id === currentUser?.id
                ? (
                  <button
                    type="button"
                    style={{ cursor: "not-allowed" }}
                  >
                    Own Game
                  </button>
                ) : (
                  myWishlist?.some(game => game?.game_id === selectedGameDisplay?.id)
                    ? (
                      <button
                        type="button"
                        onClick={() => removeGameFromWishlist(selectedGameDisplay?.id)}
                      >
                        In Wishlist
                      </button>
                    ) : (
                      < button
                        type="button"
                        onClick={() => addGameToWishlist(selectedGameDisplay?.id)}
                      >
                        Add to Wishlist
                      </button>
                    )
                )
            ) : (
              <button
                type="button"
                onClick={() => navigate("/login")}
              >
                Add to Wishlist
              </button>
            )}

        </div>

      </div>
    </section >
  );
}


export default HomepageGameListings
