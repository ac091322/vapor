import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { thunkWishlistUserGet } from "../../redux/wishlist";
import { thunkShoppingCartUserGet } from "../../redux/shoppingCart";
import { thunkGamesGet } from "../../redux/game";
import defaultAvatar from "../../../public/default-avatar.png"
import "./NavBar.css"


function NavBar() {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.session.user);
  const wishlistObj = useSelector(state => state.wishlist);
  const wishlist = Object.values(wishlistObj);
  const myWishlist = wishlist?.filter(wishlist => wishlist?.user_id === currentUser?.id);
  const shoppingCartId = currentUser ? currentUser.shopping_cart?.[0]?.id : null;
  const shoppingCartObj = useSelector(state => state.shoppingCart);
  const shoppingCart = Object.values(shoppingCartObj);
  const myShoppingCart = shoppingCart?.filter(shoppingCart => shoppingCart?.shopping_cart_id === +shoppingCartId);
  const gamesObj = useSelector(state => state.game);
  const games = Object.values(gamesObj);

  useEffect(() => {
    if (currentUser) {
      dispatch(thunkWishlistUserGet());
      dispatch(thunkShoppingCartUserGet(shoppingCartId));
    }
  }, [dispatch, currentUser, shoppingCartId]);

  useEffect(() => {
    dispatch(thunkGamesGet());
  }, [dispatch]);

  const randomGames = () => {
    const selectedGames = [];
    const numberOfGames = Math.min(games.length, 3);

    while (selectedGames.length < numberOfGames) {
      const randomIndex = Math.floor(Math.random() * games.length);
      const randomGame = games[randomIndex]
      if (!selectedGames.includes(randomGame)) {
        selectedGames.push(randomGame)
      }
    }
    return selectedGames
  };

  const randomGameList = randomGames(games);

  return (
    <section id="container-navbar-outer">
      <section id="container-navbar">

        {currentUser && <div id="container-wishlist-shoppingcart-buttons">
          <Link to="/user?activeTab=wishlist">
            <button id="navbar-wishlist-button">
              Wishlist ({myWishlist?.length ? myWishlist?.length : 0})
            </button>
          </Link>
          <Link to="/user?activeTab=shoppingCart">
            <button id="navbar-shopping-cart-button">
              <FaShoppingCart style={{ paddingBottom: "1px" }} /> Cart ({myShoppingCart?.length})
            </button>
          </Link>
        </div>}

        <ul>
          <Link to="/user">
            <li id="container-avatar-store-link">
              <img
                style={{ height: "16px", width: "16px" }}
                src={defaultAvatar}
                alt="mini-avatar" />
              Your Store
            </li>
          </Link>
          <li>Top Games:</li>

          {randomGameList.map((game, index) => (
            <li key={index}><Link to={`/games/${game.id}`}>{game.title}</Link></li>
          ))}
        </ul>

        <div id="container-search-bar-nav">
          <input placeholder="search" />
          <div style={{ paddingTop: "2px", height: "25px", width: "25px", marginBottom: "3px" }}>
            <button><IoSearchSharp /></button>
          </div>
        </div>
      </section>
    </section>
  );
}


export default NavBar;
