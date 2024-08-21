const UPLOAD_IMAGE = "uploadImage/UPLOAD_IMAGE"

const addPost = (post) => ({
  type: UPLOAD_IMAGE,
  payload: post
});

/*
You do NOT want to set any headers for this fetch because you should let the browser set that info for us. You also do NOT want to JSON.stringify() the body of the request, because you are using formData and not JSON
*/

export const thunkImageUpload = (post) => async (dispatch) => {
  const response = await fetch(`/images/new`, {
    method: "POST",
    body: post
  });

  if (response.ok) {
    const { resPost } = await response.json();
    dispatch(addPost(resPost));
  } else {
    console.log("There was an error making your post!")
  }
};


const initialState = {
  posts: []
};

const imageUploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_IMAGE:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    default:
      return state;
  }
};


export default imageUploadReducer;
