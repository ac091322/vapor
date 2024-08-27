const GET_USERS = "getAllUsers/GET_USERS"

const getUsers = (users) => ({
  type: GET_USERS,
  payload: users
});

export const thunkUsersGet = () => async (dispatch) => {
  const response = await fetch("/api/users/", {
    method: "GET"
  });
  if (response.ok) {
    const data = await response.json()
    dispatch(getUsers(data.users));
  }
};

const initialState = {}

function userReducer(state = initialState, action) {
  switch (action.type) {

    case GET_USERS: {
      const newState = { ...state }
      action.payload.forEach(user => {
        newState[user.id] = user
      })
      return newState;
    }

    default:
      return state
  }
}


export default userReducer
