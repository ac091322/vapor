const GET_REVIEWS = "get_all_reviews/GET_REVIEWS";
const CREATE_REVIEW = "create_review/CREATE_REVIEW";
const EDIT_REVIEW = "edit_review/EDIT_REVIEW";
const DELETE_REVIEW = "delete_review/DELETE_REVIEW";

const getReviews = (reviews) => ({
  type: GET_REVIEWS,
  payload: reviews
});

const editReview = (review) => ({
  type: EDIT_REVIEW,
  payload: review
});

const createReview = (review) => ({
  type: CREATE_REVIEW,
  payload: review
});

const deleteReview = (reviewId) => ({
  type: DELETE_REVIEW,
  payload: reviewId
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

export const thunkReviewEdit = (review) => async (dispatch) => {
  const response = await fetch(`/api/reviews/${review.id}/put`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(review),
    credentials: "include"
  });
  if (response.ok) {
    const data = response.json();
    dispatch(editReview(data));
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

    case EDIT_REVIEW: {
      const newState = { ...state }
      newState[action.payload.id] = action.payload
      return newState;
    }

    case DELETE_REVIEW: {
      const newState = { ...state }
      delete newState[action.payload]
      return newState
    }

    default:
      return state;
  }
}


export default reviewReducer;
