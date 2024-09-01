const GET_SHOPPING_CARTS = "get_all_shopping_carts/GET_SHOPPING_CARTS";
const ADD_GAME = "add_game_to_shopping_cart/ADD_GAME"
const REMOVE_GAME = "remove_game_from_shopping_cart/"

const getShoppingCarts = (shoppingCarts) => ({
  tpe: GET_SHOPPING_CARTS,
  payload: shoppingCarts
});

const addGame = (game) => ({
  type: ADD_GAME,
  payload: game
});

const removeGame = (gameId) => ({
  type: REMOVE_GAME,
  payload: gamdId
});

export const thunkShoppingCartsGet = () => async (dispatch) => {
  const response = await fetch("/api/shopping-carts/all", {
    method: "GET"
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(getShoppingCarts());
  }
};

export const thunkShoppingCartUserGet = () => async (dispatch) => {
  const response = await fetch("/api/shopping-carts/user", {
    method: "GET"
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(getShoppingCarts());
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
    dispatch(removeGame(shoppingCartId, gameId));
  }
};

const initialState = {}

function shoppingCartReducer(state = initialState, action) {
  switch (action.type) {



    default:
      return state
  }
};


export default shoppingCartReducer;
