const GET_SCREENSHOTS = "get_all_screenshots/GET_SCREENSHOTS";
const UPLOAD_SCREENSHOTS = "upload_screenshots/UPLOAD_SCREENSHOTS"

const getScreenshots = (screenshots) => ({
  type: GET_SCREENSHOTS,
  payload: screenshots
});

const uploadScreenshots = (posts) => ({
  type: UPLOAD_SCREENSHOTS,
  payload: posts
});

export const thunkScreenshotsGet = () => async (dispatch) => {
  const response = await fetch("/api/screenshots/all", {
    method: "GET",
  });
  if (response.ok) {
    const screenshots = await response.json();
    dispatch(getScreenshots(screenshots));
  }
};

export const thunkScreenshotsAdd = (posts) => async (dispatch) => {
  const response = await fetch("/api/screenshots/post", {
    method: "POST",
    body: posts
  });

  if (response.ok) {
    const { resPosts } = await response.json();
    dispatch(uploadScreenshots(resPosts));

  } else {
    console.log("Upload screenshots failed");
  }
};

const initialState = {
  posts: []
};

const screenshotReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_SCREENSHOTS: {
      const newState = { ...state };
      action.payload.forEach(screenshot => {
        newState[screenshot.id] = screenshot;
      });
      return newState;
    }

    case UPLOAD_SCREENSHOTS:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      }

    default:
      return state;
  }
};


export default screenshotReducer;
