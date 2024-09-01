import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { NavLink, useNavigate, useSearchParams } from "react-router-dom"
import ShoppingCart from "./ShoppingCart";
import MyWishlist from "./MyWishlist";
import MyGames from "./MyGames"
import MyReviews from "./MyReviews"
import defaultAvatar from "../../../public/default-avatar.png"
import "./UserProfile.css"


function UserProfile() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentUser = useSelector(state => state.session.user);
  const gamesObj = useSelector(state => state.game);
  const games = Object.values(gamesObj);
  const filteredGames = games?.filter(game => game.user.user_id === currentUser?.id);
  const reviewsObj = useSelector(state => state.review);
  const reviews = Object.values(reviewsObj);
  const filteredReviews = reviews?.filter(review => review.user_id === currentUser?.id);

  const [activeTab, setActiveTab] = useState(searchParams.get("activeTab") || "myGames");

  useEffect(() => {
    if (!currentUser) navigate("/");
  }, [currentUser, navigate]);

  if (!currentUser) return null;

  const createdGameCount = Array.isArray(filteredGames) ? filteredGames?.length : 0;
  // const purchasedGameCount = Array.isArray(filteredGames) ? filteredGames?.length : 0;
  const reviewedGameCount = Array.isArray(filteredReviews) ? filteredReviews?.length : 0;
  const levelCalculation = createdGameCount * 5 + reviewedGameCount * 1;

  return (
    <section id="container-user-profile-page">
      <div id="container-profile-content">

        <div id="container-profile-content-left">
          <div id="container-profile-details-left">
            {currentUser.id === 11
              ? <img src={currentUser.avatar} alt="demo-avatar" />
              : <img src={defaultAvatar} alt="default-avatar" />}

            <div id="container-profile-content-left-name">
              <span style={{ color: "white", fontSize: "24px" }}>{currentUser.username}</span>
              <p style={{ color: "var(--light-beige-font-color)", fontSize: "13px" }}>
                {currentUser.id === 11
                  ? currentUser.about
                  : "No information given."}
              </p>
            </div>
          </div>

          {activeTab === "shoppingCart" && <ShoppingCart />}
          {activeTab === "wishlist" && <MyWishlist />}
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
              <span style={{ color: "#61686D", fontSize: "13px" }}>Purchased: None yet...</span>
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
              <NavLink>Library</NavLink>

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
        </div>
      </div>
    </section >
  );
}

export default UserProfile
