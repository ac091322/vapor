const GET_GAMES = "get_all_games/GET_GAMES";
const GET_GAME = "get_game_by_id/GET_GAME";
const CREATE_GAME = "create_game/CREATE_GAME";
const EDIT_GAME = "edit_game/EDIT_GAME";
const DELETE_GAME = "delete_game/DELETE_GAME";

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

const editGame = (game) => ({
  type: EDIT_GAME,
  payload: game
});

const deleteGame = (gameId) => ({
  type: DELETE_GAME,
  payload: gameId
});

export const thunkGamesGet = () => async (dispatch) => {
  const response = await fetch("/api/games/all", {
    method: "GET"
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(getGames(data));
  }
};

export const thunkGameGetId = (gameId) => async (dispatch) => {
  const response = await fetch(`/api/games/${gameId}/get`, {
    method: "GET"
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(getGame(data));
  }
};

export const thunkGameCreate = (game) => async (dispatch) => {
  const response = await fetch("/api/games/post", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(game),
    credentials: "include"
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(createGame(data));
    return data;
  }
};

export const thunkGameEdit = (game) => async (dispatch) => {
  const response = await fetch(`/api/games/${game.id}/put`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(game),
    credentials: "include"
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(editGame(data));
    return data;
  }
};

export const thunkGameDelete = (gameId) => async (dispatch) => {
  const response = await fetch(`/api/games/${gameId}/delete`, {
    method: "DELETE"
  });
  if (response.ok) {
    dispatch(deleteGame(gameId));
  }
};

const initialState = {}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_GAMES: {
      const newState = { ...state }
      action.payload.forEach(game => {
        newState[game.id] = game
      })
      return newState;
    }

    case GET_GAME: {
      const newState = { ...state }
      newState[action.payload.id] = action.payload
      return newState;
    }

    case CREATE_GAME: {
      const newState = { ...state }
      newState[action.payload.id] = action.payload
      return newState;
    }

    case EDIT_GAME: {
      const newState = { ...state }
      newState[action.payload.id] = action.payload
      return newState;
    }

    case DELETE_GAME: {
      const newState = { ...state }
      delete newState[action.payload]
      return newState;
    }

    default:
      return state;
  }
};


export default gameReducer;
