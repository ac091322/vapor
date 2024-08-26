import { Link } from "react-router-dom"
import logo from "../../../public/logo.png"
import "./Footer.css"


function Footer() {
  // const currentYear = new Date().getFullYear();
  const today = new Date();
  const offset = today.getTimezoneOffset();
  const date = new Date(today.getTime() - offset * 60 * 1000)
    .toISOString()
    .split("T")[0];

  const year = date.split("-").slice(0, 1)

  return (
    <footer>
      <div>
        <Link to="/"><img style={{}} src={logo} alt="logo" /></Link>
        <span>©{year} VAPOR, INC.</span>
      </div>
    </footer>
  );
}


export default Footer;
