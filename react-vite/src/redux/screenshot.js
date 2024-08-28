const GET_SCREENSHOTS = "getScreenshots/GET_ALL_SCREENSHOTS"


const getScreenshots = (screenshots) => ({
  type: GET_SCREENSHOTS,
  payload: screenshots
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

const initialState = {};

const screenshotReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_SCREENSHOTS: {
      const newState = { ...state };
      action.payload.forEach(screenshot => {
        newState[screenshot.id] = screenshot;
      });
      return newState;
    }

    default:
      return state;
  }
};


export default screenshotReducer;
