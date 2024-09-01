const GET_SHOPPING_CART = "get_games_in_shopping_cart/GET_SHOPPING_CART";
const ADD_GAME = "add_game_to_shopping_cart/ADD_GAME"
const REMOVE_GAME = "remove_game_from_shopping_cart/REMOVE_GAME"

const getGames = (shoppingCart) => ({
  type: GET_SHOPPING_CART,
  payload: shoppingCart
});

const addGame = (game) => ({
  type: ADD_GAME,
  payload: game
});

const removeGame = (gameId) => ({
  type: REMOVE_GAME,
  payload: gameId
});

export const thunkShoppingCartUserGet = (shoppingCartId) => async (dispatch) => {
  const response = await fetch(`/api/shopping-carts/${shoppingCartId}/user`, {
    method: "GET"
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(getGames(data));
  }
};

export const thunkShoppingCartGameAdd = (gameId, shoppingCartId) => async (dispatch) => {
  const response = await fetch(`/api/games/${gameId}/${shoppingCartId}/user/shopping-cart/post`, {
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

export const thunkShoppingCartGameRemove = (shoppingCartId, gameId) => async (dispatch) => {
  const response = await fetch(`/api/shopping-carts/${shoppingCartId}/${gameId}/user/delete`, {
    method: "DELETE"
  });
  if (response.ok) {
    dispatch(removeGame(gameId));
  }
};

const initialState = {}

function shoppingCartReducer(state = initialState, action) {
  switch (action.type) {

    case GET_SHOPPING_CART: {
      const newState = { ...state }
      action.payload.forEach(game => {
        newState[game.game_id] = game
      })
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


export default shoppingCartReducer;
