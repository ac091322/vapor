const UPLOAD_COVER_ART = "uploadCoverArt/UPLOAD_COVER_ART"

const addPost = (post) => ({
  type: UPLOAD_COVER_ART,
  payload: post
});

/*
You do NOT want to set any headers for this fetch because you should let the browser set that info for us. You also do NOT want to JSON.stringify() the body of the request, because you are using formData and not JSON
*/

export const createImage = (post) => async (dispatch) => {
  console.log("IN THE THNUNK???")
  const response = await fetch(`/images/new`, {
    method: "POST",
    body: post
  });

  if (response.ok) {
    console.log("SERVER RESPONSE???")
    const { resPost } = await response.json();
    dispatch(addPost(resPost));
  } else {
    console.log("There was an error making your post!")
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
        posts: [...state.posts, action.payload],
      };
    default:
      return state;
  }
};


export default coverArtReducer;
