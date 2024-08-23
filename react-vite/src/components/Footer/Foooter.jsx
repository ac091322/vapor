import { Link } from "react-router-dom"
import logo from "../../../public/logo.png"
import "./Footer.css"


function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div>
        <Link to="/"><img style={{}} src={logo} alt="logo" /></Link>
        <span>©{currentYear} VAPOR, INC.</span>
      </div>
    </footer>
  );
}


export default Footer;
