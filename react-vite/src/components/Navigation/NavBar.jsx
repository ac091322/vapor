import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
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

  const [query, setQuery] = useState("");
  const [searchedGames, setSearchedGames] = useState([]);
  // const [randomGameList, setRandomGameList] = useState([]);

  useEffect(() => {
    if (currentUser) {
      dispatch(thunkWishlistUserGet());
      dispatch(thunkShoppingCartUserGet(shoppingCartId));
    }
  }, [dispatch, currentUser, shoppingCartId]);

  useEffect(() => {
    dispatch(thunkGamesGet());
  }, [dispatch]);

  useEffect(() => {
    if (games.length > 0) {
      const filteredGames = games.filter(game => game.title.toLowerCase().includes(query.toLowerCase()));
      setSearchedGames(filteredGames);
    }
  }, [query]);

  const randomGames = (games) => {
    const selectedRandomGames = new Set();
    const numberOfGamesToSelect = Math.min(games.length, 3);

    while (selectedRandomGames.size < numberOfGamesToSelect) {
      const randomGame = games[Math.floor(Math.random() * games.length)];
      selectedRandomGames.add(randomGame);
    }
    return Array.from(selectedRandomGames);
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
          <input
            placeholder="search"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />

          {query && <IoCloseSharp
            id="reset-search-button"
            onClick={() => setQuery("")}
          />}

          <div style={{ paddingTop: "2px", height: "25px", width: "25px", marginBottom: "4px" }}>
            <button><IoSearchSharp /></button>
          </div>
        </div>

        {query && (
          <div id="search-results-box" style={{ opacity: "1" }}>
            {searchedGames.length ? (
              searchedGames.map(game => (
                <span key={game.id} className="highlighted-search-result">
                  <Link
                    to={`/games/${game.id}`}
                    onClick={() => setQuery("")}
                  >{game.title}</Link>
                </span>
              ))
            ) : (
              <span>No games found</span>
            )}
          </div>
        )}
      </section>
    </section>
  );
}


export default NavBar;
