import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { thunkWishlistUserGet, thunkWishlistGameRemove } from "../../redux/wishlist";
import { thunkGamesGet } from "../../redux/game";
import "./MyWishlist.css"


function MyWishlist() {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.session.user);
  const wishlistObj = useSelector(state => state.wishlist);
  const wishlist = Object.values(wishlistObj);
  const myWishlist = wishlist?.filter(wishlist => wishlist.user_id === currentUser?.id);
  const gamesObj = useSelector(state => state.game);
  const games = Object.values(gamesObj)
  const wishlistGames = games?.filter(game => myWishlist.some(wishlistGame => wishlistGame.game_id === game.id));

  const [removeGame, setRemoveGame] = useState(null);

  useEffect(() => {
    dispatch(thunkWishlistUserGet());
    dispatch(thunkGamesGet());
  }, [dispatch]);

  const handleRemoveGame = (gameId) => {
    dispatch(thunkWishlistGameRemove(gameId));
    setRemoveGame(null);
  };

  return (
    < section id="container-my-wishlist-component" >

      {wishlistGames?.map(game => (
        <div
          key={game.id}
          className="container-wishlist-inner"
        >
          <Link to={`/games/${game.id}`} >
            <div style={{ width: "325px" }}>
              <img src={game?.cover_art?.[0]?.cover_art_url} alt="game-cover-art" />
            </div>
          </Link>

          <div className="container-game-details-my-games">

            <div className="container-title-date">
              <span style={{ color: "white", fontSize: "15px" }}>{game.title}</span>
              <div style={{ color: "var(--logo-color)", fontSize: "13px", display: "flex", flexDirection: "column", gap: "5px" }}>
                <span >{game.release_date.split("00")[0].trim()}</span>
                <span>${game.price}</span>
              </div>
            </div>

            <div className="container-buttons-my-games">
              <button type="button"
                onClick={() => setRemoveGame(game.id)}
              >
                Remove
              </button>

              {removeGame === game.id &&
                <div className="container-delete-game-confirmation">
                  <button onClick={() => handleRemoveGame(game.id)}>
                    Yes
                  </button>

                  <button onClick={() => setRemoveGame(null)}>
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


export default MyWishlist;
