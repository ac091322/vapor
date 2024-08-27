import { useEffect } from "react"
import { useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import MyGames from "./MyGames"
import defaultAvatar from "../../../public/default-avatar.png"
import "./UserProfile.css"


function UserProfile() {
  const navigate = useNavigate();
  const currentUser = useSelector(state => state.session.user)

  useEffect(() => {
    if (!currentUser) navigate("/");
  }, [currentUser, navigate]);

  if (!currentUser) return null;

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

          <MyGames />
        </div>

        <div id="container-profile-content-right">
          <div id="container-level-user-profile">
            <span style={{ fontSize: "24px" }} id="container-level-inner">Level </span>
            <div>0</div>
          </div>

          <p>
            Level up! Create a game, get 5 points. Buy a game, get 3 points. And you get 1 point for every review you leave.
          </p>

          <div id="container-tab-items-user-profile">
            <span style={{ fontSize: "24px", color: "#898989" }} >Profile Tabs</span>
            <nav>
              <NavLink>Shopping Cart</NavLink>
              <NavLink>Wishlist</NavLink>
              <NavLink>Library</NavLink>
              <NavLink>My Games</NavLink>
              <NavLink>My Reviews</NavLink>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserProfile
