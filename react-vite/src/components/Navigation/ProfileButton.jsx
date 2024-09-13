import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { IoCaretDownSharp } from "react-icons/io5";
import { thunkLogout } from "../../redux/session";
import defaultAvatar from "../../../public/default-avatar.png"


function ProfileButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ulRef = useRef();
  const user = useSelector((store) => store.session.user);

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (ulRef.current && !ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const toggleMenu = (e) => {
    e.stopPropagation(); // keep from bubbling up to document and triggering closeMenu
    setShowMenu(!showMenu);
  };

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(thunkLogout());
    closeMenu();
    navigate("/");
  };

  return (
    <>
      {
        user ? (
          <div id="container-profile-button-avatar">
            <div
              id="profile-button"
              onClick={toggleMenu}
            >
              {user.username}<IoCaretDownSharp />
            </div>

            {showMenu && (
              <ul className={"profile-dropdown"} ref={ulRef}>
                <Link to="/user" onClick={closeMenu}>View my profile</Link>
                <li>Username: {user.username}</li>
                <li>Email: {user.email}</li>
                <Link to="/create-game" onClick={closeMenu}>Create a game</Link>
                <Link onClick={logout}>Sign out of account...</Link>
              </ul>
            )}
            <Link to="/user">
              {user.id === 15
                ? <img src={user.avatar} alt="demo-avatar" />
                : <img src={defaultAvatar} alt="default-avatar" />
              }
            </Link>
          </div>
        ) : (
          <div id="container-login-signup">
            <Link className="login-signup-buttons" to="/login">login</Link>
            <span style={{ color: "var(--logo-color" }}>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
            <Link className="login-signup-buttons" to="/signup">signup</Link>
          </div>)
      }
    </>
  );
}


export default ProfileButton;
