const GET_REVIEWS = "getAllReviews/GET_REVIEWS"
const CREATE_REVIEW = "createReviewbyGameId/CREATE_REVIEW"
const DELETE_REVIEW = "deleteReviewById/DELETE_REVIEW"

const getReviews = (reviews) => ({
  type: GET_REVIEWS,
  payload: reviews
});

const deleteReview = (reviewId) => ({
  type: DELETE_REVIEW,
  payload: reviewId
});

const createReview = (review) => ({
  type: CREATE_REVIEW,
  payload: review
});

export const thunkReviewsGet = () => async (dispatch) => {
  const response = await fetch("/api/reviews/all", {
    method: "GET"
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(getReviews(data));
  }
};

export const thunkReviewsGetId = (gameId) => async (dispatch) => {
  const response = await fetch(`/api/games/${gameId}/reviews`, {
    method: "GET"
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(getReviews(data));
  }
};

export const thunkReviewCreate = (gameId, reviewData) => async (dispatch) => {
  const response = await fetch(`/api/games/${gameId}/review/post`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reviewData),
    credentials: "include"
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(createReview(data));
    return data;
  }
};

export const thunkReviewDelete = (reviewId) => async (dispatch) => {
  const response = await fetch(`/api/reviews/${reviewId}/delete`, {
    method: "DELETE"
  });
  if (response.ok) {
    dispatch(deleteReview(reviewId));
  }
};

const initialState = {}

function reviewReducer(state = initialState, action) {
  switch (action.type) {

    case GET_REVIEWS: {
      const newState = { ...state };
      action.payload.forEach(review => {
        newState[review.id] = review;
      })
      return newState;
    }

    case CREATE_REVIEW: {
      const newState = { ...state }
      newState[action.payload.id] = action.payload
      return newState
    }

    case DELETE_REVIEW: {
      const newState = { ...state }
      delete newState[action.payload]
      return newState
    }

    default:
      return state;
  }
};


export default reviewReducer;
