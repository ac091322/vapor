import { useSelector } from "react-redux"
import { NavLink, Link } from "react-router-dom";
import { ImDownload2 } from "react-icons/im";
import ProfileButton from "./ProfileButton";
import logo from "../../../public/logo.png"
import "./Navigation.css";


function Navigation() {
  const currentUser = useSelector(state => state.session.user);

  return (
    <section id="container-navigation-outer" style={{ backgroundColor: "var(--nav-background-color)" }}>

      <div id="container-navigation-inner">
        <div id="container-logo-navlinks">
          <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
          <ul>
            <li id="store-link"><Link to="/">STORE</Link></li>
            <li><Link to="https://www.linkedin.com/in/alanchang091322/" target="_blank">LINKEDIN</Link></li>
            <li><Link to="https://github.com/ac091322" target="_blank">GITHUB</Link></li>
            <li><Link to="https://ac091322.github.io/my-portfolio/" target="_blank">PORTFOLIO</Link></li>
          </ul>
        </div>

        <div id="container-install-login">

          <button
            id="install-button"
            style={currentUser ? { backgroundColor: "rgb(59, 65, 74, 0.8)" } : { backgroundColor: "#5C7E10" }}>
            <ImDownload2 />&nbsp;&nbsp;&nbsp;Install Steam
          </button>

          <div><ProfileButton /></div>
        </div>
      </div>

    </section >
  );
}


export default Navigation;
