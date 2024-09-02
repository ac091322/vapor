import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { thunkShoppingCartGameRemove, thunkShoppingCartUserGet } from "../../redux/shoppingCart";
import { thunkGamesGet } from "../../redux/game";
import "./ShoppingCart.css"


function ShoppingCart({ calculateTotal }) {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.session.user);
  const shoppingCartId = currentUser.shopping_cart?.[0]?.id;
  const shoppingCartObj = useSelector(state => state.shoppingCart);
  const shoppingCart = Object.values(shoppingCartObj);
  const myShoppingCart = shoppingCart?.filter(shoppingCart => shoppingCart.shopping_cart_id === +shoppingCartId);
  const gamesObj = useSelector(state => state.game);
  const games = Object.values(gamesObj);
  const shoppingCartGames = games?.filter(game => myShoppingCart?.some(shoppingCart => shoppingCart.game_id === game.id));

  const total = shoppingCartGames.reduce((accum, game) => accum + parseFloat(game.price), 0);
  const roundedTotal = Math.round(total * 100) / 100;

  const [removeGame, setRemoveGame] = useState(null);

  useEffect(() => {
    dispatch(thunkShoppingCartUserGet(shoppingCartId));
    dispatch(thunkGamesGet());
  }, [dispatch, shoppingCartId]);

  useEffect(() => {
    if (calculateTotal) {
      calculateTotal(roundedTotal)
    }
  }, [calculateTotal, roundedTotal]);

  const handleRemoveGame = (shoppingCartId, gameId) => {
    dispatch(thunkShoppingCartGameRemove(shoppingCartId, gameId))
      .then(() => dispatch(thunkShoppingCartUserGet(shoppingCartId)));
    setRemoveGame(null);
  };

  return (
    < section id="container-shopping-cart-component" >

      {shoppingCartGames?.map(game => (
        <div
          key={game.id}
          className="container-shopping-cart-inner"
        >
          <Link to={`/games/${game.id}`} >
            <div style={{ width: "325px" }}>
              <img
              style={{width: "325px", height: "150px"}}
              src={game?.cover_art?.[0]?.cover_art_url}
              alt="game-cover-art"
              />
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
                Remove from Shopping Cart
              </button>

              {removeGame === game.id &&
                <div className="container-delete-game-confirmation">
                  <button onClick={() => handleRemoveGame(shoppingCartId, game.id)}>
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

    </section>
  );
}


export default ShoppingCart;
