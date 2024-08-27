import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { thunkGamesGet } from "../../redux/game";
import { thunkGameDeleteId } from "../../redux/game";
import "./MyGames.css";


function MyGames() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(state => state.session.user);
  const gamesObj = useSelector(state => state.game);
  const games = Object.values(gamesObj)
  const filteredGames = games.filter(game => game.user.id === currentUser.id);

  const [deleteGame, setDeleteGame] = useState(null);
  const [editGame, setEditGame] = useState(null);

  useEffect(() => {
    if (currentUser) dispatch(thunkGamesGet());
  }, [dispatch]);

  const handleDeleteGame = (gameId) => {
    dispatch(thunkGameDeleteId(gameId));
    setDeleteGame(null);
  };

  return (
    <section id="container-my-games">

      {filteredGames?.map(game => (
        <div
          key={game.id}
          className="container-own-game-inner"
        >
          <Link
            to={`/games/${game.id}`}
            className="container-own-game-inner-left"
          >
            <img src={game?.cover_art?.[0]?.cover_art_url} alt="game-cover-art" />
            <div className="container-game-details-my-games">
              <span style={{ color: "white", fontSize: "15px" }}>{game?.title}</span>
              <div style={{ color: "var(--logo-color)", fontSize: "13px" }}>
                <span >{game?.release_date.split("00")[0].trim()}</span>
                <span>${game?.price}</span>
              </div>
            </div>
          </Link>

          <div className="container-buttons-my-games">
            <button
              type="button"
              onClick={() => setEditGame(game.id)}
            >Edit</button>
            <button
              type="button"
              onClick={() => setDeleteGame(game.id)}
            >
              Delete</button>

            {editGame === game.id &&
              <div className="container-edit-game-confirmation">
                <button onClick={() => navigate(`/games/${game.id}/edit`)}>Yes</button>
                <button onClick={() => setEditGame(null)}>No</button>
              </div>}

            {deleteGame === game.id &&
              <div className="container-delete-game-confirmation">
                <button onClick={() => handleDeleteGame(game.id)}>Yes</button>
                <button onClick={() => setDeleteGame(null)}>No</button>
              </div>}
          </div>
        </div>
      ))}

    </section>
  );
}


export default MyGames;
