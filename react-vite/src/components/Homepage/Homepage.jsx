import HomeBanner from "../HomeBanner/HomeBanner";
import GameCarousel from "../GameCarousel/GameCarousel";
import "./Homepage.css";

import UploadScreenshots from "../Games/UploadScreenshots";

function Homepage() {
  return (
    <section id="container-homepage">

      <HomeBanner />
      <GameCarousel />

    </section >
  );
}


export default Homepage;
