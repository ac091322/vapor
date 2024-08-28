import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoThumbsUp } from "react-icons/io5";
import { IoThumbsDown } from "react-icons/io5";
import { GoStarFill } from "react-icons/go";
import { GoStar } from "react-icons/go";
import { thunkGamesGet } from "../../redux/game";
import { thunkReviewDelete, thunkReviewsGet } from "../../redux/review";
import { thunkUsersGet } from "../../redux/user";
import "./MyReviews.css"


function MyReviews() {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.session.user);
  const gamesObj = useSelector(state => state.game);
  const games = Object.values(gamesObj);
  const reviewsObj = useSelector(state => state.review)
  const reviews = Object.values(reviewsObj);
  const filteredReviews = reviews.filter(review => review.user_id === currentUser.id);

  const [editReview, setEditReview] = useState(null);
  const [deleteReview, setDeleteReview] = useState(null);

  useEffect(() => {
    if (currentUser) {
      dispatch(thunkGamesGet());
      dispatch(thunkReviewsGet())
    }
  }, [dispatch, currentUser]);


  const handleEditReview = (reviewId) => {
    dispatch()
    setEditReview(null);
  };

  const handleDeleteReview = (reviewId) => {
    dispatch(thunkReviewDelete(reviewId));
    setDeleteReview(null);
  };

  return (
    <section id="container-my-reviews-component">

      {filteredReviews?.map(review => {
        const game = games[review.game_id];

        return (
          <div
            key={review.id}
          >
            <div id="container-game-cover-art-review">
              <div>
                <img src={game?.cover_art?.[0]?.cover_art_url} alt="game-cover-art" />

                <div id="container-buttons-my-reviews">
                  <button
                    type="button"
                    onClick={() => (setEditReview(review.id))}
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => (setDeleteReview(review.id))}
                  >
                    Delete
                  </button>

                  {editReview === review.id &&
                    <div id="container-edit-review-confirmation">
                      <button>
                        Yes
                      </button>

                      <button onClick={() => setEditReview(null)}>
                        No
                      </button>
                    </div>}

                  {deleteReview === review.id &&
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
                {review.thumbs_up ? (
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
                    POSTED: {review.updated_at}
                  </span>

                  <p style={{ color: "#ACB2B8", fontSize: "13px" }}>
                    {review.description}
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
