import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { BiLogoWindows } from "react-icons/bi";
import { thunkGameGetId } from "../../redux/game";
import { BiLogoApple } from "react-icons/bi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { thunkScreenshotsGet, thunkScreenshotsGetAll } from "../../redux/screenshot";
import "./GameDetails.css";


function GameDetails() {
  const dispatch = useDispatch();
  const { gameId } = useParams();
  const game = useSelector(state => state.game[gameId])
  const screenshotsObj = useSelector(state => state.screenshot)
  const screenshots = Object.values(screenshotsObj)
  const filteredScreenshots = screenshots.filter(screenshot => screenshot.game_id === +gameId);

  useEffect(() => {
    dispatch(thunkGameGetId(gameId));
    dispatch(thunkScreenshotsGetAll(gameId));
  }, [dispatch, gameId, game]);

  return (
    <section id="container-game-details-page">
      <h1>{game?.title}</h1>
      <div id="container-game-details-page-inner">
        <div id="container-game-carousel-game-details">
          <div id="container-game-carousel-game-details-left">
            <img id="main-image-game-details" src={filteredScreenshots?.[0]?.screenshot_url} />

            <div id="container-thumbnail-images-game-details">
              <div className="thumbnail-game-details" id="video-placeholder-game-details">video placeholder</div>
              <img className="thumbnail-game-details" alt="screenshot" src={filteredScreenshots?.[1]?.screenshot_url} />
              <img className="thumbnail-game-details" alt="screenshot" src={filteredScreenshots?.[2]?.screenshot_url} />
              <img className="thumbnail-game-details" alt="screenshot" src={filteredScreenshots?.[3]?.screenshot_url} />
              <img className="thumbnail-game-details" alt="screenshot" src={filteredScreenshots?.[4]?.screenshot_url} />
            </div>
          </div>

          <div id="container-game-carousel-game-details-right">
            <img src={game?.cover_art?.[0]?.cover_art_url} alt="cover-art" />
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

            <div style={{ marginTop: "30px" }}>
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
                  <span className="requirements-value">game?.genre</span>
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
          <h4 style={{ color: "white" }}>CUSTOMER REVIEWS</h4>
          <hr />
        </div>
      </div>
    </section>
  );
}


export default GameDetails;
