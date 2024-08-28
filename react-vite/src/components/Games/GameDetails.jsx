import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { BiLogoWindows } from "react-icons/bi";
import { BiLogoApple } from "react-icons/bi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { thunkGameGetId } from "../../redux/game";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import ReviewFormModal from "../Reviews/ReviewFormModal";
import Reviews from "../Reviews/Reviews";
import screenshotPlaceholder from "../../../public/screenshot-placeholder.png"
import videoPlaceholder from "../../../public/video-placeholder.png"
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

  const [selectedScreenshot, setSelectedScreenshot] = useState("");
  const [selectedVideo, setSelectedVideo] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    dispatch(thunkGameGetId(gameId));
  }, [dispatch, gameId]);

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

  const closeMenu = () => setShowMenu(false);

  const mainImage = selectedScreenshot || selectedVideo || game?.screenshots?.[0]?.screenshot_url || screenshotPlaceholder;

  return (
    <section id="container-game-details-page">
      <h1>{game?.title}</h1>
      <div id="container-game-details-page-inner">
        <div id="container-game-carousel-game-details">
          <div id="container-game-carousel-game-details-left">

            <img
              id="main-image-game-details"
              src={mainImage}
              alt="main-screenshot"
            />

            <div id="container-thumbnail-images-game-details">
              <img
                className="thumbnail-game-details"
                id="video-placeholder-game-details"
                src={videoPlaceholder}
                alt="video-placeholder"
                onClick={() => {
                  setSelectedScreenshot("")
                  setSelectedVideo(prev => prev ? "" : videoPlaceholder)
                }}
              />

              {game?.screenshots?.length > 0 ? (
                game?.screenshots?.map((screenshot) => (
                  <img
                    key={screenshot.id}
                    className="thumbnail-game-details"
                    alt="screenshot"
                    src={screenshot.screenshot_url}
                    onClick={() => {
                      setSelectedScreenshot(screenshot.screenshot_url)
                      setSelectedVideo("")
                    }}
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
                </>
              )}
            </div>
          </div>

          <div id="container-game-carousel-game-details-right">
            <img style={{ width: "325px", height: "150px" }} src={game?.cover_art?.[0]?.cover_art_url} alt="cover-art" />
            <p style={{ paddingRight: "15px" }}>{game?.description}</p>

            <div id="container-description-game-details">
              <div id="container-description-game-details-left">
                <span>POSITIVE REVIEWS:</span>
                <span>NEGATIVE REVIEWS:</span>
                <span>RELEASE DATE:</span>
                <span>DEVELOPER:</span>
                <span>USERNAME:</span>
              </div>

              <div id="container-description-game-details-right">
                <span>50,000 reviews</span>
                <span>310 reviews</span>
                <span>{game?.release_date.split("00")[0].trim()}</span>
                <span style={{ color: "#67C1F5", fontWeight: "bold", fontSize: "12px" }}>{game?.user?.username}</span>
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

        <div id="sign-in-wish-list-notice">Sign in to add this item to your wishlist or shopping cart</div>

        <div id="container-bottom-section-game-details">
          <div id="container-bottom-section-left">

            <div id="container-buy-bar">
              <h2>Buy {game?.title}</h2>
              <div>
                <BiLogoWindows />
                <BiLogoApple />
              </div>
              <div id="container-price-add-button">
                <span style={{ color: "var(--logo-color)", fontSize: "14px", padding: "0 15px" }}>${game?.price}</span>
                <button>Add to Cart</button>
              </div>
            </div>

            <div id="container-bottom-description-game-details">
              <h4 style={{ color: "white" }}>ABOUT THIS GAME</h4>
              <hr />
              <p style={{ color: "var(--logo-color)", fontSize: "14px" }}>{game?.description}</p>
            </div>

            <div style={{ marginTop: "45px" }}>
              <h4 style={{ color: "white" }}>SYSTEM REQUIREMENTS</h4>
              <hr />

              <div id="container-requirements-inner">
                <div>
                  <span className="requirements-value">MINIMUM:&nbsp;&nbsp;&nbsp;</span>
                  <div className="requirements-title">{game?.min_requirements}</div>
                </div>
                <div>
                  <span className="requirements-title">OS:&nbsp;&nbsp;&nbsp;</span>
                  <span className="requirements-value">{game?.min_os}</span>
                </div>
                <div>
                  <span className="requirements-title">Processor:&nbsp;&nbsp;&nbsp;</span>
                  <span className="requirements-value">{game?.min_processor}</span>
                </div>
                <div>
                  <span className="requirements-title">Memory:&nbsp;&nbsp;&nbsp;</span>
                  <span className="requirements-value">{game?.min_memory}</span>
                </div>
                <div>
                  <span className="requirements-title">Graphics:&nbsp;&nbsp;&nbsp;</span>
                  <span className="requirements-value">{game?.min_graphics}</span>
                </div>
                <div>
                  <span className="requirements-title">DirectX:&nbsp;&nbsp;&nbsp;</span>
                  <span className="requirements-value">{game?.min_directx}</span>
                </div>
                <div>
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
                  <span className="requirements-value">{game?.user?.username}</span>
                </div>
                <div>
                  <span className="requirements-title">RELEASE DATE:&nbsp;</span>
                  <span className="requirements-value">{game?.release_date.split("00")[0].trim()}</span>
                </div>
              </div>

              <div id="container-external-links-outer">
                <div className="external-links-container">
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
                </div>
                <div className="external-links-container">View update history</div>
                <div className="external-links-container">Read related news</div>
                <div className="external-links-container">View discussions</div>
                <div className="external-links-container">Find community groups</div>
              </div>
            </div>

          </div>
        </div>

        <div id="container-reviews-game-details">
          <div>
            <h4 style={{ color: "white", marginTop: "45px" }}>CUSTOMER REVIEWS</h4>
            {currentUser ? (
              reviews?.find(review => review.user_id === currentUser.id && review.game_id === +gameId)
                ? (
                  <button disabled={true}
                    style={{ cursor: "not-allowed", background: "linear-gradient(to right, rgb(119, 175, 59), rgb(91, 137, 46))" }}
                  >
                    Reviewed
                  </button>
                ) : (
                  <button>
                    <OpenModalMenuItem
                      itemText="Leave review"
                      onItemClick={closeMenu}
                      modalComponent={<ReviewFormModal userId={currentUser.id} gameId={gameId} />}
                    />
                  </button>
                )
            ) : (
              <button onClick={() => navigate("/login")}>
                Leave review
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
