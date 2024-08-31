const GET_WISHLIST = "getCurrentUserWishlist/GET_WISHLIST";
const ADD_GAME = "addGameToWishlist/ADD_GAME";
const REMOVE_GAME = "removeGameFromWishlist/REMOVE_GAME";


const getWishlist = (wishlist) => ({
  type: GET_WISHLIST,
  payload: wishlist
});

const addGame = (game) => ({
  type: ADD_GAME,
  payload: game
});

const removeGame = (gameId) => ({
  type: REMOVE_GAME,
  payload: gameId
});

export const thunkWishlistGet = () => async (dispatch) => {
  const response = await fetch("/api/wishlists/all", {
    method: "GET"
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(getWishlist(data));
  }
};

export const thunkWishlistUserGet = () => async (dispatch) => {
  const response = await fetch(`/api/wishlists/user`, {
    method: "GET"
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(getWishlist(data));
  }
};

export const thunkWishlistGameAdd = (gameId) => async (dispatch) => {
  const response = await fetch(`/api/games/${gameId}/wishlist/post`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(gameId),
    credentials: "include"
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(addGame(data));
    return data;
  }
};

export const thunkWishlistGameRemove = (gameId) => async (dispatch) => {
  const response = await fetch(`/api/wishlists/${gameId}/delete`, {
    method: "DELETE",
    credentials: "include"
  });
  if (response.ok) {
    dispatch(removeGame(gameId));
  }
};

const initialState = {}

function wishlistReducer(state = initialState, action) {
  switch (action.type) {

    case GET_WISHLIST: {
      const newState = { ...state }
      action.payload.forEach(game => {
        newState[game.game_id] = game
      })
      return newState
    }

    case ADD_GAME: {
      const newState = { ...state }
      newState[action.payload.id] = action.payload
      return newState
    }

    case REMOVE_GAME: {
      const newState = { ...state }
      delete newState[action.payload]
      return newState
    }

    default:
      return state
  }
};


export default wishlistReducer;
