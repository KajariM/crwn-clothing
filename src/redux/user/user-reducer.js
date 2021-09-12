import { userType } from "./user-type";
const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  //if state is ever undefined , it will take this initial value
  switch (action.type) {
    case userType.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
