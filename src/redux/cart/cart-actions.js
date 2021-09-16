import { cartType } from "./cart-type";

export const setToggleCart = () => ({
  type: cartType.SET_CART_TOGGLE,
});

export const addItemsCart = (item) => ({
  type: cartType.SET_CART_ITEMS,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: cartType.CLEAR_CART_ITEMS,
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: cartType.REMOVE_CART_ITEMS,
  payload: item,
});
