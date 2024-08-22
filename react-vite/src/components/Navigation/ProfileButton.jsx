import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { thunkLogout } from "../../redux/session";
import { IoCaretDownSharp } from "react-icons/io5";
import demoDeveloperAvatar from "../../../public/demo-developer-avatar.png"


function ProfileButton() {
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
    e.stopPropagation(); // Keep from bubbling up to document and triggering closeMenu
    setShowMenu(!showMenu);
  };

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(thunkLogout());
    closeMenu();
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
                <li>View my profile</li>
                <li>Username: {user.username}</li>
                <li>Email: {user.email}</li>
                <Link onClick={logout}>Sign out of account...</Link>
              </ul>
            )}

            <Link to=""><img src={demoDeveloperAvatar} alt="profile-avatar" /></Link>
          </div>

        ) : (

          <>
            <Link style={{ fontSize: "12px" }} to="/login">login</Link>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link style={{ fontSize: "12px" }} to="/signup">signup</Link>
          </>)
      }
    </>
  );
}


export default ProfileButton;
