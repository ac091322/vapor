import { NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import banner from "../../../public/wukong-banner.png";
import "./HomeBanner.css"
import "../../components/Navigation/NavBar.css"


function HomeBanner() {
  return (
    <div id="container-homepage-banner">
      <NavLink id="container-mini-navigation">
        <ul>
          <li>Your Store</li>
          <li>New & Noteworthy</li>
          <li>Categories</li>
          <li style={{ cursor: "not-allowed" }}>Points Shop</li>
          <li style={{ cursor: "not-allowed" }}>News</li>
          <li style={{ cursor: "not-allowed" }}>Labs</li>
        </ul>

        <div id="container-search-bar-mini-navigation">
          <input placeholder="search" />
          <button><IoSearchSharp /></button>
        </div>
      </NavLink>
      <div>
        <img src={banner} alt="Banner" />
      </div>
    </div>
  );
}


export default HomeBanner;
