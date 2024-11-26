import homeBanner from "../../../public/wukong-banner.png";
import "./HomeBanner.css"


function HomeBanner() {
  return (
    <div id="container-homepage-banner">
      <div>
        <img src={homeBanner} alt="homepage_banner" />
      </div>
    </div>
  );
}


export default HomeBanner;
