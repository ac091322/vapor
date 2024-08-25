const GET_ALL_SCREENSHOTS = "getAllScreenshots/GET_ALL_SCREENSHOTS"
const GET_SCREENSHOTS = "getScreenshotsByGame/GET_SCREENSHOTS"

const getAllScreenshots = (screenshots) => ({
  type: GET_ALL_SCREENSHOTS,
  payload: screenshots
});

// const getScreenshots = (screenshots) => ({
//   type: GET_SCREENSHOTS,
//   payload: screenshots
// });

export const thunkScreenshotsGetAll = () => async (dispatch) => {
  const response = await fetch("/api/screenshots/all", {
    method: "GET",
  });

  if (response.ok) {
    const screenshots = await response.json();
    dispatch(getAllScreenshots(screenshots));
  }
};

export const thunkScreenshotsGetByGame = (gameId) => async (dispatch) => {
  const response = await fetch(`/api/games/${gameId}/screenshots`, {
    method: "GET",
  });
  if (response.ok) {
    const screenshots = await response.json();
    dispatch(getAllScreenshots(screenshots));
  }
};

const initialState = {};

const screenshotReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_ALL_SCREENSHOTS: {
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
