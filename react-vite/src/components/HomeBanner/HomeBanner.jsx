import NavBar from "../Navigation/NavBar";
import homeBanner from "../../../public/wukong-banner.png";
import "./HomeBanner.css"
import "../../components/Navigation/NavBar.css"


function HomeBanner() {
  return (
    <div id="container-homepage-banner">
      <NavBar />
      <div>
        <img src={homeBanner} alt="homepage_banner" />
      </div>
    </div>
  );
}


export default HomeBanner;
