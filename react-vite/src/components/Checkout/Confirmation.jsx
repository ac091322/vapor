import { Link } from "react-router-dom";


function Confirmation({ purchasedGames }) {
  return (
    <>
      <div className="container-title-checkout">
        <h1>Confirmation</h1>
        <span style={{
          paddingTop: "5px",
          color: "var(--logo-color)",
          fontSize: "13px"
        }}>step 2 of 2</span>
      </div>

      {purchasedGames.length === 1
        ? <p>Congratulations, you&apos;ve successfully "purchased" the following game, and you didn&apos;t even have to pay an actual dime!</p>
        : <p>Congratulations, you&apos;ve successfully "purchased" the following games, and you didn&apos;t even have to pay an actual dime!</p>}


      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        marginTop: "20px"
      }}>
        {purchasedGames?.map(cartItem => (
          <div
            key={cartItem.game_id}
            className="container-games-in-shopping-cart"
          >
            <span>{cartItem.game_title}</span>
            <span>{cartItem.price}</span>
          </div>
        ))}
      </div>

      <Link
        className="container-buttons-checkout"
        to="/user?activeTab=library">
        <button type="button">
          Go to Library
        </button>
      </Link>
    </>
  );
}


export default Confirmation;
