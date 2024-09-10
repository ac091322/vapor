import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { thunkLibraryUserGet } from "../../redux/library";
import { thunkGamesGet } from "../../redux/game";
import coverArtPlaceholder from "../../../public/cover-art-placeholder.png"
import "./Library.css";


function Library() {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.session.user);
  const libraryOjb = useSelector(state => state.library);
  const library = Object.values(libraryOjb);
  const myLibrary = library?.filter(game => game?.user_id === currentUser?.id);
  const gamesObj = useSelector(state => state.game);
  const games = Object.values(gamesObj);
  const libraryGames = games?.filter(game => myLibrary?.some(libraryGame => libraryGame?.game_id === game?.id));

  useEffect(() => {
    dispatch(thunkLibraryUserGet());
    dispatch(thunkGamesGet());
  }, [dispatch]);

  return (
    <section id="container-library-component">

      {libraryGames?.map(game => (
        <div
          key={game.id}
          className="container-own-games-inner"
        >
          <Link to={`/games/${game?.id}`} >
            <div style={{ width: "325px" }}>
              <img
                style={{ width: "325px", height: "150px" }}
                src={game?.cover_art?.[0]?.cover_art_url ? game?.cover_art?.[0]?.cover_art_url : coverArtPlaceholder}
                alt="game-cover-art" />
            </div>
          </Link>

          <div className="container-game-details-my-games">

            <div className="container-title-date">
              <span style={{ color: "white", fontSize: "15px" }}>{game?.title}</span>
              <div style={{
                color: "var(--logo-color)",
                fontSize: "13px",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                height: "105px"
              }}>
                <span >{game?.release_date.split("00")[0].trim()}</span>
                <span>${game?.price}</span>

                <p style={{
                  paddingTop: "5px",
                  height: "75px",
                  overflowY: "scroll",
                  scrollbarWidth: "thin",
                  scrollbarColor: "#888 transparent"
                }}>
                  {game?.description}
                </p>
              </div>

            </div>
          </div>
        </div>
      ))}

    </section >
  );
}


export default Library
