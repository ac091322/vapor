import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
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
          {
            currentUser.id === 11
              ? <img src={currentUser.avatar} alt="demo-avatar" />
              : <img src={defaultAvatar} alt="default-avatar" />
          }

          <div id="container-profile-content-left-name">

            <span style={{ color: "white", fontSize: "24px" }}>{currentUser.username}</span>

            <p style={{ color: "var(--light-beige-font-color)", fontSize: "13px" }}>
              {
                currentUser.id === 11
                  ? currentUser.about
                  : "No information given."
              }
            </p>

          </div>
        </div>

        <div id="container-profile-content-right">

        </div>
      </div>

    </section>
  );
}

export default UserProfile
