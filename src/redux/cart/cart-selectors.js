import { createSelector } from "reselect";

const cartData = (state) => state.cart;

export const cartHiddenSelector = createSelector(
  [cartData],
  (cart) => cart.hidden
);

export const cartItemSelector = createSelector(
  [cartData],
  (cart) => cart.items
);

export const cartItemcountSelector = createSelector(
  [cartItemSelector],
  (items) => items.reduce((acc, curr) => acc + curr.quantity, 0)
);

export const cartItempriceSelector = createSelector(
  [cartItemSelector],
  (items) => items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
);
