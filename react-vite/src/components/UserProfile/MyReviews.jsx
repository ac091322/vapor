import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { IoThumbsUp } from "react-icons/io5";
import { IoThumbsDown } from "react-icons/io5";
import { GoStarFill } from "react-icons/go";
import { GoStar } from "react-icons/go";
import { thunkGamesGet } from "../../redux/game";
import { thunkReviewsGet, thunkReviewDelete } from "../../redux/review";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import EditReviewFormModal from "./EditReviewFormModal";
import "./MyReviews.css"


function MyReviews() {
  const dispatch = useDispatch();
  const ulRef = useRef();
  const currentUser = useSelector(state => state.session.user);
  const gamesObj = useSelector(state => state.game);
  const games = Object.values(gamesObj);
  const reviewsObj = useSelector(state => state.review)
  const reviews = Object.values(reviewsObj);
  const filteredReviews = reviews?.filter(review => review?.user_id === currentUser?.id);

  const [deleteReview, setDeleteReview] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    dispatch(thunkGamesGet());
    dispatch(thunkReviewsGet());
  }, [dispatch, currentUser]);

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

  const handleDeleteReview = (reviewId) => {
    dispatch(thunkReviewDelete(reviewId));
    setDeleteReview(null);
  };

  return (
    <section id="container-my-reviews-component">

      {filteredReviews?.map(review => {
        const game = games?.find(game => game?.id === review?.game_id)

        return (
          <div
            key={review.id}
          >
            <div id="container-game-cover-art-review">
              <div>
                <Link to={`/games/${game.id}`}>
                  <img src={game?.cover_art?.[0]?.cover_art_url} alt="game-cover-art" />
                </Link>

                <div id="container-buttons-my-reviews">
                  <button>
                    <OpenModalMenuItem
                      itemText="Edit"
                      onItemClick={closeMenu}
                      modalComponent={<EditReviewFormModal userId={currentUser.id} gameId={game.id} reviewId={review.id} />}
                    />
                  </button>

                  <button
                    type="button"
                    onClick={() => (setDeleteReview(review.id))}
                  >
                    Delete
                  </button>

                  {deleteReview === review?.id &&
                    <div id="container-delete-review-confirmation">
                      <button onClick={() => handleDeleteReview(review.id)}>
                        Yes
                      </button>

                      <button onClick={() => setDeleteReview(null)}>
                        No
                      </button>
                    </div>}

                </div>
              </div>

              <div>
                {review?.thumbs_up ? (
                  <div className="container-recommendation-my-reviews">
                    <div style={{ color: "#D6D7D8" }}>
                      <IoThumbsUp
                        style={{
                          height: "40px",
                          width: "40px",
                          backgroundColor: "rgb(28, 66, 92)",
                          padding: "5px",
                          color: "rgb(102, 183, 230)",
                          transform: "scaleX(-1)",
                        }}
                      />
                      Recommended
                    </div>
                    <GoStarFill style={{ color: "rgb(81, 106, 123)" }} />
                  </div>

                ) : (

                  <div className="container-recommendation-my-reviews">
                    <div style={{ color: "var(--light-beige-font-color)" }}>
                      <IoThumbsDown
                        style={{
                          height: "40px",
                          width: "40px",
                          backgroundColor: "rgb(99, 54, 60)",
                          padding: "5px",
                          color: "rgb(223, 103, 104)",
                        }}
                      />
                      Not Recommended
                    </div>
                    <GoStar style={{ color: "rgb(81, 106, 123)" }} />
                  </div>
                )}

                <div id="container-my-reviews-right">
                  <span style={{ color: "#8091A2", fontSize: "11px" }}>
                    POSTED: {review?.updated_at}
                  </span>

                  <p style={{
                    color: "#ACB2B8",
                    fontSize: "13px",
                    height: "130px",
                    width: "305px",
                    overflow: "scroll",
                    scrollbarWidth: "thin",
                    scrollbarColor: "#888 transparent"
                  }}>
                    {review?.description}
                  </p>
                </div>

              </div>

            </div>
          </div>
        )

      })}

    </section>
  );
}


export default MyReviews
