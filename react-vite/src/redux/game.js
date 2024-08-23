const GET_GAMES = "getAllGames/GET_GAMES"
const GET_GAME = "getGameById/GET_GAME"
const CREATE_GAME = "createGame/CREATE_GAME"

const getGames = (games) => ({
  type: GET_GAMES,
  payload: games
});

const getGame = (game) => ({
  type: GET_GAME,
  payload: game
});

const createGame = (game) => ({
  type: CREATE_GAME,
  payload: game
});

export const thunkGamesGet = () => async (dispatch) => {

  const response = await fetch("/api/games/", {
    method: "GET"
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(getGames(data));
  }
};

export const thunkGameGetId = (gameId) => async (dispatch) => {
  const response = await fetch(`/api/games/${gameId}`, {
    method: "GET"
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(getGame(data));
  }
};

export const thunkGameCreate = (gameData) => async (dispatch) => {
  try {
    const response = await fetch("/api/games/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gameData),
      credentials: "include",
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(createGame(data));
      return data;

    } else {
      const errorData = await response.json();
      console.error("Error creating game:", errorData.errors || response.statusText);

    }
  } catch (error) {
    console.error("Network or server error:", error);
  }
};

const initialState = {}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_GAMES: {
      const newState = { ...state };
      action.payload.forEach(game => {
        newState[game.id] = game
      });
      return newState
    }

    case GET_GAME: {
      const newState = { ...state };
      newState[action.payload.id] = action.payload
      return newState;
    }

    case CREATE_GAME: {
      const newState = { ...state };
      newState[action.payload.id] = action.payload
      return newState;
    }

    default:
      return state;
  }
};


export default gameReducer;
