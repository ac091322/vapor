import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { NavLink, useNavigate, useSearchParams, Link } from "react-router-dom"
import { thunkShoppingCartUserGet } from "../../redux/shoppingCart";
import { thunkLibraryUserGet } from "../../redux/library";
import { thunkReviewsGet } from "../../redux/review";
import ShoppingCart from "./ShoppingCart";
import MyWishlist from "./MyWishlist";
import Library from "./Library";
import MyGames from "./MyGames"
import MyReviews from "./MyReviews"
import defaultAvatar from "../../../public/default-avatar.png"
import "./UserProfile.css"


function UserProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentUser = useSelector(state => state.session.user);
  const gamesObj = useSelector(state => state.game);
  const games = Object.values(gamesObj);
  const filteredGames = games?.filter(game => game?.user?.user_id === currentUser?.id);
  const reviewsObj = useSelector(state => state.review);
  const reviews = Object.values(reviewsObj);
  const filteredReviews = reviews?.filter(review => review?.user_id === currentUser?.id);
  const shoppingCartId = currentUser ? currentUser?.shopping_cart?.[0]?.id : null;
  const shoppingCartObj = useSelector(state => state.shoppingCart);
  const shoppingCart = Object.values(shoppingCartObj);
  const myShoppingCart = shoppingCart?.filter(shoppingCart => shoppingCart?.shopping_cart_id === +shoppingCartId);
  const libraryOjb = useSelector(state => state.library);
  const myLibrary = Object.values(libraryOjb);
  const libraryGames = games?.filter(game => myLibrary?.some(libraryGame => libraryGame?.game_id === game?.id));

  const [activeTab, setActiveTab] = useState(searchParams.get("activeTab") || "library");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!currentUser) navigate("/");
  }, [currentUser, navigate]);

  useEffect(() => {
    dispatch(thunkShoppingCartUserGet(shoppingCartId));
    dispatch(thunkLibraryUserGet());
    dispatch(thunkReviewsGet());
  }, [dispatch, shoppingCartId]);

  const calculateTotal = (roundedTotal) => {
    setTotal(roundedTotal);
  };

  if (!currentUser) return null;

  const createdGameCount = Array.isArray(filteredGames) ? filteredGames?.length : 0;
  const purchasedGameCount = Array.isArray(filteredGames) ? libraryGames?.length : 0;
  const reviewedGameCount = Array.isArray(filteredReviews) ? filteredReviews?.length : 0;
  const levelCalculation = createdGameCount * 5 + purchasedGameCount * 3 + reviewedGameCount * 1;

  return (
    <section id="container-user-profile-page">
      <div id="container-profile-content">

        <div id="container-profile-content-left">
          <div id="container-profile-details-left">
            {currentUser?.id === 14
              ? <img src={currentUser?.avatar} alt="demo-avatar" />
              : <img src={defaultAvatar} alt="default-avatar" />}

            <div id="container-profile-content-left-name">
              <span style={{ color: "white", fontSize: "24px" }}>{currentUser?.username}</span>

              {currentUser?.id === 14
                ? <p>Welcome developer! Any game you add to your wishlist or shopping cart will appear here. Any game you purchase will appear in your Library. Any game you create will appear under My Games. And any review you&apos;ve left for a game will appear under My Reviews.</p>
                : <p>currentUser?.about</p>
              }
            </div>
          </div>

          {activeTab === "shoppingCart" && <ShoppingCart calculateTotal={calculateTotal} />}
          {activeTab === "wishlist" && <MyWishlist />}
          {activeTab === "library" && <Library />}
          {activeTab === "myGames" && <MyGames />}
          {activeTab === "myReviews" && <MyReviews />}
        </div>

        <div id="container-profile-content-right">
          <div id="container-level-user-profile">
            <span style={{ fontSize: "24px" }} id="container-level-inner">Level </span>
            <div>{levelCalculation}</div>
          </div>

          <div id="container-points-description">
            <p>
              Level up! Create a game, get 5 points. Buy a game, get 3 points. And you get 1 point for every review you leave.
            </p>

            <div id="container-points-accumulated">
              <span style={{ color: "#61686D", fontSize: "13px" }}>Created: {createdGameCount}</span>
              <span style={{ color: "#61686D", fontSize: "13px" }}>Purchased: {purchasedGameCount}</span>
              <span style={{ color: "#61686D", fontSize: "13px" }}>Reviewed: {reviewedGameCount}</span>
            </div>
          </div>

          <div id="container-tab-items-user-profile">
            <span style={{ fontSize: "24px", color: "#898989" }} >Profile Tabs</span>
            <nav>
              <NavLink
                to="#"
                className={activeTab === "shoppingCart" ? "active-link" : ""}
                onClick={() => setActiveTab("shoppingCart")}
              >
                Shopping Cart
              </NavLink>
              <NavLink
                to="#"
                className={activeTab === "wishlist" ? "active-link" : ""}
                onClick={() => setActiveTab("wishlist")}
              >Wishlist</NavLink>
              <NavLink
                to="#"
                className={activeTab === "library" ? "active-link" : ""}
                onClick={() => setActiveTab("library")}
              >
                Library
              </NavLink>
              <NavLink
                to="#"
                className={activeTab === "myGames" ? "active-link" : ""}
                onClick={() => setActiveTab("myGames")}
              >
                My Games
              </NavLink>
              <NavLink
                to="#"
                className={activeTab === "myReviews" ? "active-link" : ""}
                onClick={() => setActiveTab("myReviews")}
              >
                My Reviews
              </NavLink>
            </nav>
          </div>

          {activeTab === "shoppingCart" &&
            <div id="container-shopping-cart-total-calculations">
              <div id="container-total-calculations">
                <span>Estimated total</span>
                {myShoppingCart?.length === 0
                  ? (
                    <span style={{ fontWeight: "bold", fontSize: "20px" }}>None</span>
                  ) : (
                    <span style={{ fontWeight: "bold", fontSize: "20px" }}>${total}</span>
                  )}
              </div>
              <p style={{ fontSize: "13px" }}>Sales tax will be calculated during checkout where applicable</p>
              {myShoppingCart?.length === 0
                ? (
                  <button
                    type="button"
                    style={{
                      cursor: "not-allowed",
                      background: "gray"
                    }}
                  >Cart is Empty</button>
                ) : (
                  <Link to="/checkout"><button type="button">Continue to Payment</button></Link>
                )}
            </div>}
        </div>
      </div >
    </section >
  );
}


export default UserProfile
