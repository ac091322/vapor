const GET_WISHLIST = "get_all_wishlists/GET_WISHLIST";
const ADD_GAME = "add_game_to_wishlist/ADD_GAME";
const REMOVE_GAME = "remove_game_from_wishlist/REMOVE_GAME";

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
  const response = await fetch(`/api/games/${gameId}/user/wishlist/post`, {
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
  const response = await fetch(`/api/wishlists/${gameId}/user/delete`, {
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
      newState[action.payload.game_id] = action.payload
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
}


export default wishlistReducer;
