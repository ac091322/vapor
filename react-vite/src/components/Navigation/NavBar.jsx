import { NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import "./NavBar.css"


function NavBar() {
  return (
    <NavLink id="container-navbar">
      <ul>
        <li style={{ cursor: "not-allowed" }}>Your Store</li>
        <li style={{ cursor: "not-allowed" }}>New & Noteworthy</li>
        <li style={{ cursor: "not-allowed" }}>Categories</li>
        <li style={{ cursor: "not-allowed" }}>Points Shop</li>
        <li style={{ cursor: "not-allowed" }}>News</li>
        <li style={{ cursor: "not-allowed" }}>Labs</li>
      </ul>

      <div id="container-search-bar-nav">
        <input placeholder="search" />
        <div style={{ paddingTop: "2px", height: "25px", width: "25px", marginBottom: "2px" }}>
          <button><IoSearchSharp /></button>
        </div>
      </div>
    </NavLink>
  );
}


export default NavBar;
