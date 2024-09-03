import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { thunkWishlistUserGet, thunkWishlistGameRemove } from "../../redux/wishlist";
import { thunkGamesGet } from "../../redux/game";
import { thunkShoppingCartUserGet, thunkShoppingCartGameAdd } from "../../redux/shoppingCart";
import { thunkLibraryUserGet } from "../../redux/library";
import coverArtPlaceholder from "../../../public/cover-art-placeholder.png"
import "./MyWishlist.css"


function MyWishlist() {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.session.user);
  const shoppingCartId = currentUser ? currentUser?.shopping_cart?.[0]?.id : null;
  const shoppingCartObj = useSelector(state => state.shoppingCart);
  const shoppingCart = Object.values(shoppingCartObj);
  const myShoppingCart = shoppingCart?.filter(shoppingCart => shoppingCart?.shopping_cart_id === +shoppingCartId);
  const wishlistObj = useSelector(state => state.wishlist);
  const wishlist = Object.values(wishlistObj);
  const myWishlist = wishlist?.filter(wishlist => wishlist?.user_id === currentUser?.id);
  const gamesObj = useSelector(state => state.game);
  const games = Object.values(gamesObj)
  const wishlistGames = games?.filter(game => myWishlist?.some(wishlistGame => wishlistGame?.game_id === game?.id));
  const libraryOjb = useSelector(state => state.library);
  const library = Object.values(libraryOjb);
  const myLibrary = library?.filter(game => game?.user_id === currentUser?.id);

  const [removeGame, setRemoveGame] = useState(null);

  useEffect(() => {
    dispatch(thunkWishlistUserGet());
    dispatch(thunkGamesGet());
    dispatch(thunkShoppingCartUserGet(shoppingCartId));
    dispatch(thunkLibraryUserGet());
  }, [dispatch, shoppingCartId]);

  const handleRemoveGame = (gameId) => {
    dispatch(thunkWishlistGameRemove(gameId));
    setRemoveGame(null);
  };

  const handleAddGameToShoppingCart = (gameId) => {
    dispatch(thunkShoppingCartGameAdd(gameId, shoppingCartId))
      .then(() => dispatch(thunkShoppingCartUserGet(shoppingCartId)));
  };

  return (
    < section id="container-my-wishlist-component" >
      {wishlistGames?.map(game => {
        const isInShoppingCart = myShoppingCart?.some(cartItem => cartItem?.game_id === game?.id)
        const inLibrary = myLibrary?.some(libraryItem => libraryItem?.game_id === game?.id);

        return (
          < div
            key={game.id}
            className="container-wishlist-inner"
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
                <div style={{ color: "var(--logo-color)", fontSize: "13px", display: "flex", flexDirection: "column", gap: "5px" }}>
                  <span >{game?.release_date.split("00")[0].trim()}</span>
                  <span>${game?.price}</span>
                </div>
              </div>

              <div className="container-buttons-my-games">
                {inLibrary
                  ? (
                    <button
                      type="button"
                      style={{ cursor: "not-allowed" }}
                    >
                      Already Purchased
                    </button>

                  ) : isInShoppingCart

                    ? (
                      <button
                        type="button"
                        style={{ cursor: "not-allowed" }}
                      >
                        In Shopping Cart
                      </button>

                    ) : (
                      <button
                        type="button"
                        onClick={() => handleAddGameToShoppingCart(game?.id)}
                      >
                        Add to Cart
                      </button>
                    )
                }
                <button
                  type="button"
                  onClick={() => setRemoveGame(game?.id)}
                >
                  Remove from Wishlist
                </button>

                {removeGame === game?.id &&
                  <div className="container-delete-game-confirmation">
                    <button onClick={() => handleRemoveGame(game?.id)}>
                      Yes
                    </button>

                    <button onClick={() => setRemoveGame(null)}>
                      No
                    </button>
                  </div>}
              </div>

            </div>
          </div>
        )

      })}
    </section >
  );
}


export default MyWishlist;
