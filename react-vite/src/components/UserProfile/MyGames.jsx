import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { thunkGamesGet } from "../../redux/game";
import { thunkGameDelete } from "../../redux/game";
import "./MyGames.css";


function MyGames() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(state => state.session.user);
  const gamesObj = useSelector(state => state.game);
  const games = Object.values(gamesObj);
  const filteredGames = games?.filter(game => game.user.user_id === currentUser.id);

  const [deleteGame, setDeleteGame] = useState(null);

  useEffect(() => {
    dispatch(thunkGamesGet());
  }, [dispatch, currentUser]);

  const handleDeleteGame = (gameId) => {
    dispatch(thunkGameDelete(gameId));
    setDeleteGame(null);
  };

  return (
    <section id="container-my-games-component">

      {filteredGames?.map(game => (
        <div
          key={game.id}
          className="container-own-game-inner"
        >
          <Link to={`/games/${game.id}`} >
            <div style={{ width: "325px" }}>
              <img src={game?.cover_art?.[0]?.cover_art_url} alt="game-cover-art" />
            </div>
          </Link>

          <div className="container-game-details-my-games">
            <div className="container-title-date">
              <span style={{ color: "white", fontSize: "15px" }}>{game?.title}</span>
              <div style={{ color: "var(--logo-color)", fontSize: "13px", display: "flex", flexDirection: "column", gap: "5px" }}>
                <span >{game?.release_date.split("00")[0].trim()}</span>
                <span>${game?.price}</span>
              </div>
            </div>

            <div className="container-buttons-my-games">
              <button type="button"
                onClick={() => navigate(`/games/${game.id}/edit`)}
              >
                Edit
              </button>

              <button type="button"
                onClick={() => setDeleteGame(game.id)}
              >
                Delete
              </button>

              {deleteGame === game.id &&
                <div className="container-delete-game-confirmation">
                  <button onClick={() => handleDeleteGame(game.id)}>
                    Yes
                  </button>

                  <button onClick={() => setDeleteGame(null)}>
                    No
                  </button>
                </div>}
            </div>

          </div>
        </div>
      ))}

    </section >
  );
}


export default MyGames;
