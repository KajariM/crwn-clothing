import { createSelector } from "reselect";

const shopData = (state) => state.shop;

export const shopSelector = createSelector(
    [shopData],
    (shop)=> shop.Collections
)