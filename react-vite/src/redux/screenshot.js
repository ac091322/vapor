const GET_SCREENSHOTS = "get_all_screenshots/GET_SCREENSHOTS";
const UPLOAD_SCREENSHOTS = "upload_screenshots/UPLOAD_SCREENSHOTS"
const DELETE_SCREENSHOT = "delete_screenshot/DELETE_SCREENSHOT"

const getScreenshots = (screenshots) => ({
  type: GET_SCREENSHOTS,
  payload: screenshots
});

const uploadScreenshots = (posts) => ({
  type: UPLOAD_SCREENSHOTS,
  payload: posts
});

const deleteSCreenshots = (screenshotId) => ({
  type: DELETE_SCREENSHOT,
  payload: screenshotId
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

export const thunkScreenshotDelete = (screenshotIds) => async (dispatch) => {
  const deletePromises = screenshotIds.map(async (screenshotId) => {
    const response = await fetch(`/api/screenshots/${screenshotId}/delete`, {
      method: "DELETE"
    });
    if (response.ok) {
      dispatch(deleteSCreenshots(screenshotId));
    }
  });
  await Promise.all(deletePromises);
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

    case DELETE_SCREENSHOT: {
      const newState = { ...state }
      delete newState[action.payload]
      return newState
    }

    default:
      return state;
  }
};


export default screenshotReducer;
