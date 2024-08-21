import { NavLink, Link } from "react-router-dom";
import { ImDownload2 } from "react-icons/im";
import ProfileButton from "./ProfileButton";
import logo from "../../../public/logo.png"
import "./Navigation.css";


function Navigation() {
  return (
    <section id="container-navigation-outer" style={{ backgroundColor: "#171d25" }}>

      <div id="container-navigation-inner">
        <div id="container-logo-navlinks">
          <NavLink to="/"><img src={logo} /></NavLink>
          <ul>
            <li>STORE</li>
            <li style={{ cursor: "not-allowed" }}>COMMUNITY</li>
            <li style={{ cursor: "not-allowed" }}>ABOUT</li>
            <li style={{ cursor: "not-allowed" }}>SUPPORT</li>
          </ul>
        </div>

        <div id="container-install-login">
          <Link to="https://store.steampowered.com/about/"><button><ImDownload2 />&nbsp;&nbsp;&nbsp;Install Steam</button></Link>
          <div><ProfileButton /></div>
        </div>
      </div>



    </section>
  );
}


export default Navigation;
