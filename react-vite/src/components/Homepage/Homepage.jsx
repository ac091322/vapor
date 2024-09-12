import HomeBanner from "../HomeBanner/HomeBanner";
import GameCarousel from "../GameCarousel/GameCarousel";
import HomepageGameListings from "../HomepageGameListings/HomepageGameListings";
import "./Homepage.css";




function Homepage() {
  return (
    <section id="container-homepage">

      <HomeBanner />
      <GameCarousel />
      <HomepageGameListings id="game-listing-component-homepage"/>

    </section >
  );
}


export default Homepage;
