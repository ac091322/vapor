import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IoThumbsUp } from "react-icons/io5";
import { IoThumbsDown } from "react-icons/io5";
import { GoStarFill } from "react-icons/go";
import { GoStar } from "react-icons/go";
import { thunkUsersGet } from "../../redux/user";
import { thunkReviewsGet } from "../../redux/review";
import defaultAvatar from "../../../public/default-avatar.png"
import "./Reviews.css";


function Reviews() {
  const dispatch = useDispatch();
  const { gameId } = useParams();
  const users = useSelector(state => state.user);
  const reviewsObj = useSelector(state => state.review);
  const reviews = Object.values(reviewsObj)
  const filteredReviews = reviews.filter(review => review.game_id === +gameId);

  useEffect(() => {
    dispatch(thunkUsersGet());
    dispatch(thunkReviewsGet());
  }, [dispatch, gameId])

  return (
    <section id="container-review-component">

      {filteredReviews?.length > 0 && filteredReviews?.map((review) => {
        const user = users[review.user_id];

        return (
          <div
            key={review.id}
            id="container-review-block"
          >
            <div id="container-review-left">
              <img
                style={{ width: "35px", height: "35px", border: "1px solid gray" }}
                src={defaultAvatar}
                alt="default-avatar"
              />
              <div>
                <span>{user?.username}</span>

                <span style={{ fontSize: "12px" }}>
                  {user?.reviews?.length === 1
                    ? (
                      <>{user?.reviews?.length} review</>
                    ) : (
                      <>{user?.reviews?.length} reviews</>
                    )}
                </span>
              </div>
            </div>

            <div id="container-review-right">
              {review.thumbs_up ? (
                <div className="container-recommendation-review">
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
                <div className="container-recommendation-review">
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

              <span style={{ color: "#8091A2", fontSize: "11px" }}>
                POSTED: {review.updated_at}
              </span>
              <p style={{ color: "#ACB2B8", paddingRight: "10px", fontSize: "13px" }}>
                {review.description}
              </p>
            </div>

          </div>
        );

      })}

    </section >
  );
}



export default Reviews;
