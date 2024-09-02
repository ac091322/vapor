const GET_LIBRARY = "get_all_libraries/GET_LIBRARY"
const ADD_GAME = "add_game_to_library/ADD_GAME"

const getLibrary = (library) => ({
  type: GET_LIBRARY,
  payload: library
});

const addGame = (gameData) => ({
  type: ADD_GAME,
  payload: gameData
});

export const thunkLibraryGet = () => async (dispatch) => {
  const response = await fetch("/api/libraries/all", {
    method: "GET"
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(getLibrary(data));
  }
};

export const thunkLibraryUserGet = () => async (dispatch) => {
  const response = await fetch("/api/libraries/user", {
    method: "GET"
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(getLibrary(data));
  }
};

export const thunkLibraryGameAdd = (gameData) => async (dispatch) => {
  const response = await fetch(`/api/games/${gameData.game_id}/user/library/post`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(gameData),
    credentials: "include"
  });
  if (response.ok) {
    const data = response.json();
    dispatch(addGame(data));
    return data;
  }
};

const initialState = {}

function libraryReducer(state = initialState, action) {
  switch (action.type) {

    case GET_LIBRARY: {
      const newState = { ...state }
      action.payload.forEach(game => {
        newState[game.game_id] = game
      })
      return newState
    }

    case ADD_GAME: {
      const newState = { ...state }
      newState[action.payload.game_id] = action.payload
      return newState
    }

    default:
      return state
  }
};


export default libraryReducer;
