const GET_GAMES = "getAllGames/GET_GAMES"
const GET_GAME = "getGameById/GET_GAME"

const getGames = (games) => ({
  type: GET_GAMES,
  payload: games
});

const getGame = (game) => ({
  type: GET_GAME,
  payload: game
});

export const thunkGamesGet = () => async (dispatch) => {
  const response = await fetch("/api/games", {
    method: "GET"
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(getGames(data));
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

    default:
      return state;
  }
};


export default gameReducer
