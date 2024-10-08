import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import { BiLogoWindows } from "react-icons/bi";
// import { BiCurrentLocation, BiLogoWindows } from "react-icons/bi";
import { BiLogoApple } from "react-icons/bi";
import { FaExternalLinkAlt } from "react-icons/fa";
// import { FaFacebookSquare } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaYoutube } from "react-icons/fa";
// import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { BiSolidUserRectangle } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiPowershell } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaAws } from "react-icons/fa";
import { RiNpmjsFill } from "react-icons/ri";
import { thunkGameGetId } from "../../redux/game";
import { thunkWishlistGameAdd, thunkWishlistUserGet, thunkWishlistGameRemove } from "../../redux/wishlist";
import { thunkShoppingCartUserGet, thunkShoppingCartGameAdd } from "../../redux/shoppingCart";
import { thunkLibraryUserGet } from "../../redux/library";
import NavBar from "../Navigation/NavBar";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import ReviewFormModal from "../Reviews/ReviewFormModal";
import Reviews from "../Reviews/Reviews";
import coverArtPlaceholder from "../../../public/cover-art-placeholder.png";
import screenshotPlaceholder from "../../../public/screenshot-placeholder.png";
// import videoPlaceholder from "../../../public/video-placeholder.png"
import "./GameDetails.css";


function GameDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ulRef = useRef();
  const { gameId } = useParams();
  const currentUser = useSelector(state => state.session.user);
  const game = useSelector(state => state.game[gameId]);
  const reviewsObj = useSelector(state => state.review);
  const reviews = Object.values(reviewsObj);
  const wishlistObj = useSelector(state => state.wishlist);
  const myWishlist = Object.values(wishlistObj);
  const shoppingCartId = currentUser ? currentUser.shopping_cart?.[0]?.id : null;
  const shoppingCartObj = useSelector(state => state.shoppingCart);
  const shoppingCart = Object.values(shoppingCartObj);
  const myShoppingCart = shoppingCart?.filter(shoppingCart => shoppingCart?.shopping_cart_id === +shoppingCartId);
  const libraryOjb = useSelector(state => state.library);
  const library = Object.values(libraryOjb);
  const myLibrary = library?.filter(libraryItem => libraryItem?.user_id === currentUser?.id);

  const [selectedScreenshot, setSelectedScreenshot] = useState("");
  const [selectedVideo, setSelectedVideo] = useState("");
  const [imageClass, setImageClass] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    dispatch(thunkGameGetId(gameId));
    if (currentUser) {
      dispatch(thunkShoppingCartUserGet(shoppingCartId));
      dispatch(thunkWishlistUserGet());
      dispatch(thunkLibraryUserGet());
    }
  }, [dispatch, currentUser, gameId, shoppingCartId]);

  useEffect(() => {
    if (!showMenu) return;
    const closeMenu = (e) => {
      if (ulRef.current && !ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  useEffect(() => {
    if (game?.screenshots?.length > 0) {
      setSelectedScreenshot(game.screenshots[0].screenshot_url);
    } else {
      setSelectedScreenshot(screenshotPlaceholder);
    }
  }, [game?.screenshots]);

  const addGameToWishlist = (gameId) => {
    dispatch(thunkWishlistGameAdd(gameId))
      .then(() => dispatch(thunkWishlistUserGet()));
  };

  const removeGameFromWishlist = (gameId) => {
    dispatch(thunkWishlistGameRemove(gameId));
  };

  const handleAddGameToShoppingCart = (gameId) => {
    dispatch(thunkShoppingCartGameAdd(gameId, shoppingCartId))
      .then(() => dispatch(thunkShoppingCartUserGet(shoppingCartId)));
  };

  const closeMenu = () => setShowMenu(false);

  const mainImage = selectedScreenshot || selectedVideo || game?.screenshots?.[0]?.screenshot_url || screenshotPlaceholder;

  useEffect(() => {
    setImageClass("fade-in");
    const timer = setTimeout(() => setImageClass(""), 500);
    return () => clearTimeout(timer);
  }, [mainImage]);

  const countThumbsUpDown = () => {
    let thumbsUp = 0;
    let thumbsDown = 0;

    game?.reviews?.forEach(review => {
      if (review.thumbs_up) thumbsUp++;
      if (review.thumbs_down) thumbsDown++;
    });

    return { thumbsUp, thumbsDown };
  };

  const thumbsCount = game ? countThumbsUpDown(game?.reviews) : { thumbsUp: 0, thumbsDown: 0 };

  return (
    <section
      id="container-game-details-page">

      <NavBar />

      <h1>{game?.title}</h1>

      <div id="container-game-details-page-inner">
        <div id="container-game-carousel-game-details">
          <div id="container-game-carousel-game-details-left">

            <img
              className={`main-image ${imageClass}`}
              id="main-image-game-details"
              src={mainImage}
              alt="main-screenshot"
            />

            <div
              style={{
                overflowX: "scroll",
                scrollbarWidth: "thin",
                scrollbarColor: "#888 transparent"
              }}
              id="container-thumbnail-images-game-details">
              {/* <img
                className="thumbnail-game-details"
                id="video-placeholder-game-details"
                src={videoPlaceholder}
                alt="video-placeholder"
                onClick={() => {
                  setSelectedScreenshot("")
                  setSelectedVideo(prev => prev ? "" : videoPlaceholder)
                }}
              /> */}

              {game?.screenshots?.length > 0 ? (
                game?.screenshots?.map(screenshot => (
                  <img
                    key={screenshot.id}
                    className="thumbnail-game-details"
                    alt="screenshot"
                    src={screenshot.screenshot_url}
                    onClick={() => {
                      setSelectedScreenshot(screenshot.screenshot_url)
                      setSelectedVideo("")
                    }}
                    style={selectedScreenshot === screenshot?.screenshot_url ? { border: "1px solid white" } : { border: "" }}
                  />
                ))
              ) : (
                <>
                  <img
                    className="thumbnail-game-details"
                    alt="screenshot-placeholder"
                    src={screenshotPlaceholder}
                    onClick={() => {
                      setSelectedScreenshot(screenshotPlaceholder)
                      setSelectedVideo("")
                    }}
                  />
                  <img
                    className="thumbnail-game-details"
                    alt="screenshot-placeholder"
                    src={screenshotPlaceholder}
                    onClick={() => {
                      setSelectedScreenshot(screenshotPlaceholder)
                      setSelectedVideo("")
                    }}
                  />
                  <img
                    className="thumbnail-game-details"
                    alt="screenshot-placeholder"
                    src={screenshotPlaceholder}
                    onClick={() => {
                      setSelectedScreenshot(screenshotPlaceholder)
                      setSelectedVideo("")
                    }}
                  />
                  <img
                    className="thumbnail-game-details"
                    alt="screenshot-placeholder"
                    src={screenshotPlaceholder}
                    onClick={() => {
                      setSelectedScreenshot(screenshotPlaceholder)
                      setSelectedVideo("")
                    }}
                  />
                  <img
                    className="thumbnail-game-details"
                    alt="screenshot-placeholder"
                    src={screenshotPlaceholder}
                    onClick={() => {
                      setSelectedScreenshot(screenshotPlaceholder)
                      setSelectedVideo("")
                    }}
                  />
                  <img
                    className="thumbnail-game-details"
                    alt="screenshot-placeholder"
                    src={screenshotPlaceholder}
                    onClick={() => {
                      setSelectedScreenshot(screenshotPlaceholder)
                      setSelectedVideo("")
                    }}
                  />
                  <img
                    className="thumbnail-game-details"
                    alt="screenshot-placeholder"
                    src={screenshotPlaceholder}
                    onClick={() => {
                      setSelectedScreenshot(screenshotPlaceholder)
                      setSelectedVideo("")
                    }}
                  />
                  <img
                    className="thumbnail-game-details"
                    alt="screenshot-placeholder"
                    src={screenshotPlaceholder}
                    onClick={() => {
                      setSelectedScreenshot(screenshotPlaceholder)
                      setSelectedVideo("")
                    }}
                  />
                </>
              )}
            </div>
          </div>

          <div id="container-game-carousel-game-details-right-outer">
            <img
              style={{ width: "325px", height: "150px" }}
              src={game?.cover_art?.[0]?.cover_art_url ? game?.cover_art?.[0]?.cover_art_url : coverArtPlaceholder} alt="cover-art"
            />
            <div id="container-game-carousel-game-details-right">
              <p>{game?.description}</p>

              <div id="container-description-game-details">
                <div id="container-description-game-details-left">
                  <span>POSITIVE REVIEWS:</span>
                  <span>NEGATIVE REVIEWS:</span>
                  <span>RELEASE DATE:</span>
                  <span>DEVELOPER:</span>
                  <span>USERNAME:</span>
                </div>

                <div id="container-description-game-details-right">
                  {thumbsCount?.thumbsUp === 1
                    ? <span>{thumbsCount?.thumbsUp} review</span>
                    : <span>{thumbsCount?.thumbsUp} reviews</span>
                  }
                  {thumbsCount?.thumbsDown === 1
                    ? <span>{thumbsCount?.thumbsDown} review</span>
                    : <span>{thumbsCount?.thumbsDown} reviews</span>
                  }
                  <span>{game?.release_date.split("00")[0].trim()}</span>
                  <span style={{
                    color: "#67C1F5",
                    fontWeight: "bold",
                    fontSize: "12px"
                  }}>{game?.user?.username}</span>
                  <span >{game?.user?.username}</span>
                </div>
              </div>

              <div id="container-categories-game-details">
                <span style={{ color: "#556772", fontSize: "11px" }}>CATEGORIES:</span>

                <div id="container-tags-game-details">
                  <span className="tags">Role Playing</span >
                  <span className="tags">Story-Rich</span>
                  <span className="tags">Adventure</span>
                  <span className="tags">Action</span>
                </div>

              </div>
            </div>
          </div>
        </div>

        {currentUser ? (
          game?.user.user_id === currentUser?.id ? (
            <div className="sign-in-wishlist-bar">
              Cannot add your own game to your wishlist or shopping cart
              <button
                type="button"
                className="button-add-to-wishlist"
                style={{ cursor: "not-allowed", color: "var(--logo-color)" }}
              >Own Game</button>
            </div>
          ) : (
            myWishlist?.find(game => game?.game_id === +gameId) ? (
              < div className="sign-in-wishlist-bar">
                Click on the button to remove the game from your wishlist
                <button
                  type="button"
                  className="button-add-to-wishlist hover"
                  onClick={() => removeGameFromWishlist(gameId)}
                >
                  In Wishlist
                </button>
              </div>
            ) : (
              < div className="sign-in-wishlist-bar">
                Add this game to your wishlist
                <button
                  type="button"
                  className="button-add-to-wishlist hover"
                  onClick={() => addGameToWishlist(gameId)}
                >
                  Add to Wishlist</button>
              </div>
            )
          )
        ) : (
          <div className="sign-in-wishlist-bar">
            Sign in to add this game to your wishlist or shopping cart, or leave a review
            <Link to="/login">
              <button
                className="button-add-to-wishlist hover"
                type="button"
              >
                Add to Wishlist</button>
            </Link>
          </div>
        )}

        <div id="container-bottom-section-game-details">
          <div id="container-bottom-section-left">

            <div id="container-buy-bar">
              <h2>Buy {game?.title}</h2>
              <div>
                <BiLogoWindows />
                <BiLogoApple />
              </div>
              <div id="container-price-add-button">
                <span style={{
                  color: "var(--logo-color)",
                  fontSize: "14px",
                  padding: "0 15px"
                }}>${game?.price}</span>

                {currentUser
                  ? (game?.user.user_id === currentUser?.id
                    ? (
                      <button
                        type="button"
                        className="button-add-to-cart"
                        style={{ cursor: "not-allowed" }}>Own Game</button>
                    ) : (
                      myLibrary?.find(libraryItem => libraryItem?.game_id === game?.id
                      ) ? (
                        <button
                          type="button"
                          className="button-add-to-cart"
                          style={{ cursor: "not-allowed" }}
                        >
                          Already Purchased
                        </button>
                      ) : (
                        myShoppingCart?.find(cartItem => cartItem?.game_id === game?.id

                        ) ? (
                          <button
                            type="button"
                            className="button-add-to-cart"
                            style={{ cursor: "not-allowed" }}
                          >
                            In Shopping Cart
                          </button>
                        ) : (
                          < button
                            type="button"
                            className="button-add-to-cart hover"
                            onClick={() => handleAddGameToShoppingCart(game.id)}
                          >
                            Add to Cart
                          </button>
                        )
                      )
                    )
                  ) : (
                    <Link to="/login">
                      <button
                        className="button-add-to-cart hover"
                        type="button"
                      >
                        Add to Cart</button>
                    </Link>
                  )
                }
              </div>
            </div>

            <div id="container-bottom-description-game-details">
              <h4 style={{ color: "white" }}>ABOUT THIS GAME</h4>
              <hr />
              <p>{game?.description}</p>
            </div>

            <div style={{ marginTop: "45px" }}>
              <h4 style={{ color: "white" }}>SYSTEM REQUIREMENTS</h4>
              <hr />

              <div id="container-requirements-inner">
                <div className="container-requirements-inner-value-title">
                  <span className="requirements-title">MINIMUM:&nbsp;&nbsp;&nbsp;</span>
                  <span className="requirements-value">{game?.min_requirements}</span>
                </div>
                <div className="container-requirements-inner-value-title">
                  <span className="requirements-title">OS:&nbsp;&nbsp;&nbsp;</span>
                  <span className="requirements-value">{game?.min_os}</span>
                </div>
                <div className="container-requirements-inner-value-title">
                  <span className="requirements-title">Processor:&nbsp;&nbsp;&nbsp;</span>
                  <span className="requirements-value">{game?.min_processor}</span>
                </div>
                <div className="container-requirements-inner-value-title">
                  <span className="requirements-title">Memory:&nbsp;&nbsp;&nbsp;</span>
                  <span className="requirements-value">{game?.min_memory}</span>
                </div>
                <div className="container-requirements-inner-value-title">
                  <span className="requirements-title">Graphics:&nbsp;&nbsp;&nbsp;</span>
                  <span className="requirements-value">{game?.min_graphics}</span>
                </div>
                <div className="container-requirements-inner-value-title">
                  <span className="requirements-title">DirectX:&nbsp;&nbsp;&nbsp;</span>
                  <span className="requirements-value">{game?.min_directx}</span>
                </div>
                <div className="container-requirements-inner-value-title">
                  <span className="requirements-title">Storage:&nbsp;&nbsp;&nbsp;</span>
                  <span className="requirements-value"> {game?.min_storage}</span>
                </div>
              </div>

            </div>
          </div>

          <div id="container-bottom-section-right">
            <div id="container-game-details-side">

              <div id="container-game-details-side-inner">
                <div>
                  <span className="requirements-title">TITLE:&nbsp;</span>
                  <span className="requirements-value">{game?.title}</span>
                </div>
                <div>
                  <span className="requirements-title">GENRE:&nbsp;</span>
                  <span className="requirements-value">{game?.categories?.[0]?.name || "None"}</span>
                </div>
                <div>
                  <span className="requirements-title">DEVELOPER:&nbsp;</span>
                  <span className="requirements-value" style={{ color: "#67C1F5" }}>{game?.user?.username}</span>
                </div>
                <div>
                  <span className="requirements-title">USERNAME:&nbsp;</span>
                  <span className="requirements-value">{game?.user.username}</span>
                </div>
                <div>
                  <span className="requirements-title">RELEASE DATE:&nbsp;</span>
                  <span className="requirements-value">{game?.release_date.split("00")[0].trim()}</span>
                </div>
              </div>

              <div id="container-external-links-outer">
                {/* <div className="external-links-container">
                  Visit the website&nbsp;
                  <FaExternalLinkAlt className="external-links-icon" />
                </div>
                <div className="external-links-container">
                  <FaFacebookSquare className="social-media-icons" />
                  &nbsp;Facebook&nbsp;
                  <FaExternalLinkAlt className="external-links-icon" />
                </div>
                <div className="external-links-container">
                  <FaXTwitter className="social-media-icons" />
                  &nbsp;X (Twitter)&nbsp;
                  <FaExternalLinkAlt className="external-links-icon" />
                </div>
                <div className="external-links-container">
                  <FaYoutube className="social-media-icons" />
                  &nbsp;Youtube&nbsp;
                  <FaExternalLinkAlt className="external-links-icon" />
                </div>
                <div className="external-links-container">
                  <FaDiscord className="social-media-icons" />
                  &nbsp;Discord&nbsp;
                  <FaExternalLinkAlt className="external-links-icon" />
                </div> */}
                <div className="external-links-container">
                  <BiSolidUserRectangle className="external-links-icon" />
                  &nbsp;My Portfolio&nbsp;
                  <Link to="https://ac091322.github.io/my-portfolio/" target="_blank"><FaExternalLinkAlt className="external-links-icon" /></Link>
                </div>
                <div className="external-links-container">
                  <FaLinkedin className="external-links-icon" />
                  &nbsp;LinkedIn&nbsp;
                  <Link to="https://www.linkedin.com/in/alanchang091322/" target="_blank"><FaExternalLinkAlt className="external-links-icon" /></Link>
                </div>
                <div className="external-links-container">
                  <FaGithubSquare className="external-links-icon" />
                  &nbsp;GitHub&nbsp;
                  <Link to="https://www.linkedin.com/in/alanchang091322/" target="_blank"><FaExternalLinkAlt className="external-links-icon" /></Link>
                </div>

                <div className="external-links-container">
                  <FaGitAlt className="external-links-icon" />
                  &nbsp;Git Repository&nbsp;
                  <Link to="https://github.com/ac091322/vapor" target="_blank"><FaExternalLinkAlt className="external-links-icon" /></Link>
                </div>

                <div className="external-links-container"><IoLogoJavascript className="external-links-icon" />&nbsp;JavaScript</div>
                <div className="external-links-container"><FaPython className="external-links-icon" />&nbsp;Python</div>
                <div className="external-links-container"><FaReact className="external-links-icon" />&nbsp;React</div>
                <div className="external-links-container"><SiRedux className="external-links-icon" />&nbsp;Redux</div>
                <div className="external-links-container"><SiFlask className="external-links-icon" />&nbsp;Flask</div>
                <div className="external-links-container"><RiNpmjsFill className="external-links-icon" />&nbsp;Node Package Manager</div>
                <div className="external-links-container"><SiPowershell className="external-links-icon" />&nbsp;Pipenv</div>
                <div className="external-links-container"><FaAws className="external-links-icon" />&nbsp;AWS</div>
                <div className="external-links-container"><FaHtml5 className="external-links-icon" />&nbsp;HTML</div>
                <div className="external-links-container"><FaCss3Alt className="external-links-icon" />&nbsp;CSS</div>
              </div>
            </div>

          </div>
        </div>

        <div id="container-reviews-game-details">
          <div>
            <h4 style={{ color: "white", marginTop: "45px" }}>CUSTOMER REVIEWS</h4>
            {currentUser

              ? (game?.user.user_id === currentUser?.id ? (
                <button
                  type="button"
                  disabled={true}
                  className="button-leave-review"
                >
                  Own Game
                </button>
              ) : (reviews?.find(review => review?.user_id === currentUser?.id && review?.game_id === +gameId)
                ? (
                  <button
                    type="button"
                    disabled={true}
                    className="button-leave-review"
                  >
                    Reviewed
                  </button>
                ) : (
                  <button
                    type="button"
                    className="button-leave-review hover"
                  >
                    <OpenModalMenuItem
                      itemText="Leave Review"
                      onItemClick={closeMenu}
                      modalComponent={<ReviewFormModal userId={currentUser.id} gameId={gameId} />}
                    />
                  </button>
                ))
              ) : (
                <button
                  type="button"
                  className="button-leave-review hover"
                  onClick={() => navigate("/login")}>
                  Review
                </button>
              )}
          </div>
          <hr />
          <Reviews />
        </div>

      </div>
    </section >
  );
}


export default GameDetails;
