import { cartType } from "./cart-type";
import { decreaseItemQuantity, filterRemoveItem, uniqueItems } from "../../services/utilities";
const INITIAL_STATE = {
  hidden: true,
  items: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartType.SET_CART_TOGGLE:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartType.SET_CART_ITEMS:
      return {
        ...state,
        items: uniqueItems(state.items, action.payload),
      };
    case cartType.CLEAR_CART_ITEMS:
      return {
        ...state,
        items: filterRemoveItem(state.items, action.payload),
      };  
    case cartType.REMOVE_CART_ITEMS:
      return {
        ...state,
        items: decreaseItemQuantity(state.items, action.payload),
      }; 
    default:
      return state;
  }
};

export default cartReducer;
