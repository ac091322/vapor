import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { FaUserCircle } from 'react-icons/fa';
import { thunkLogout } from "../../redux/session";
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";


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
          <>
            <button onClick={toggleMenu}>
              <FaUserCircle />
            </button>

            {showMenu && (
              <ul className={"profile-dropdown"} ref={ulRef}>
                <>
                  <li>{user.username}</li>
                  <li>{user.email}</li>
                  <li><button onClick={logout}>Log Out</button></li>
                </>
              </ul>
            )}
          </>
        ) : <Link style={{ fontSize: "12px" }} to="/login">login</Link>
      }
    </>
  );
}


export default ProfileButton;
