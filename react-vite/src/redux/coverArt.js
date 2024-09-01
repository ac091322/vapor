const UPLOAD_COVER_ART = "upload_cover_rrt/UPLOAD_COVER_ART";
const EDIT_COVER_ART = "edit_cover_art/EDIT_COVER_ART";

const uploadCoverArt = (post) => ({
  type: UPLOAD_COVER_ART,
  payload: post
});

const editCoverArt = (coverArt) => ({
  type: EDIT_COVER_ART,
  payload: coverArt
});

/*
You do NOT want to set any headers for this fetch because you should let the browser set that info for us. You also do NOT want to JSON.stringify() the body of the request, because you are using formData and not JSON
*/

export const thunkCoverArtAdd = (post) => async (dispatch) => {
  const response = await fetch("/api/cover-arts/post", {
    method: "POST",
    body: post
  });

  if (response.ok) {
    const { resPost } = await response.json();
    dispatch(uploadCoverArt(resPost));

  } else {
    console.log("Upload cover art failed");
  }
};

export const thunkCoverArtEdit = (coverArtId, coverArtData) => async (dispatch) => {
  const response = await fetch(`/api/cover-arts/${coverArtId}/put`, {
    method: "PUT",
    body: coverArtData
  });

  if (response.ok) {
    const { resPost } = await response.json();
    dispatch(editCoverArt(resPost));

  } else {
    console.log("Update cover art failed")
  }
};

const initialState = {
  posts: []
};

const coverArtReducer = (state = initialState, action) => {
  switch (action.type) {

    case UPLOAD_COVER_ART:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      }

    case EDIT_COVER_ART:
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload.id ? action.payload : post
        )
      }

    default:
      return state;
  }
};


export default coverArtReducer;
