import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { BiSolidUserRectangle } from "react-icons/bi";
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

        <Link
          to="https://www.linkedin.com/in/alanchang091322"
          target="_blank"
          style={{ display: "flex", alignItems: "center", gap: "3px" }}
        >
          <FaLinkedin /> LINKEDIN
        </Link>

        <Link to="https://github.com/ac091322"
          target="_blank"
          style={{ display: "flex", alignItems: "center", gap: "3px" }}
        >
          <FaGithubSquare /> GITHUB
        </Link>

        <Link to="https://ac091322.github.io/my-portfolio/"
          target="_blank"
          style={{ display: "flex", alignItems: "center", gap: "3px" }}
        >
          <BiSolidUserRectangle /> PORTFOLIO
        </Link>

        <span>©{year} VAPOR, INC.</span>
      </div>
    </footer>
  );
}


export default Footer;
