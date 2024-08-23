import { NavLink, Link } from "react-router-dom";
import { ImDownload2 } from "react-icons/im";
import ProfileButton from "./ProfileButton";
import logo from "../../../public/logo.png"
import "./Navigation.css";


function Navigation() {
  return (
    <section id="container-navigation-outer" style={{ backgroundColor: "var(--nav-background-color)" }}>

      <div id="container-navigation-inner">
        <div id="container-logo-navlinks">
          <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
          <ul>
            <li>STORE</li>
            <li style={{ cursor: "not-allowed" }}>COMMUNITY</li>
            <li style={{ cursor: "not-allowed" }}>ABOUT</li>
            <li style={{ cursor: "not-allowed" }}>SUPPORT</li>
          </ul>
        </div>

        <div id="container-install-login">

          <button style={{ cursor: "not-allowed" }}><ImDownload2 />&nbsp;&nbsp;&nbsp;Install Steam</button>

          <div><ProfileButton /></div>
        </div>
      </div>

    </section >
  );
}


export default Navigation;
