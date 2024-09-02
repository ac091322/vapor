import { Link } from "react-router-dom";


function Confirmation({ shoppingCartFromLoaderData }) {
console.log("🚀 ~ Confirmation ~ shoppingCartFromLoaderData:", shoppingCartFromLoaderData)



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

      <p>Congratulations, you have successfully "purchased" the following games, and you didn't even have to pay an actual dime!</p>

      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        marginBottom: "20px"
      }}>
        {shoppingCartFromLoaderData?.map(cartItem => (
          <div
            key={cartItem.game_id}
            className="container-games-in-shopping-cart"
          >
            <span>{cartItem.game_title}</span>
            <span>{cartItem.price}</span>
          </div>
        ))}
      </div>

      <span>Enjoy!</span>

      <Link to="/user?activeTab=library">
        <button type="button">
          Go to Library
        </button>
      </Link>
    </>
  );
}


export default Confirmation;
