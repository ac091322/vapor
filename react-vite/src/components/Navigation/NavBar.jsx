import { NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";


function NavBar() {
  return (
    <NavLink id="container-navbar">
      <ul>
        <li>Your Store</li>
        <li>New & Noteworthy</li>
        <li>Categories</li>
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
