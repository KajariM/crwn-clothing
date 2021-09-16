import { createSelector } from "reselect";
import memoize from 'lodash.memoize';
const COLLECTION_ID_MAP = {
  'hats': 1,
  'sneakers': 2,
  'jackets': 3,
  'womens': 4,
  'mens': 5
}
const shopData = (state) => state.shop;

export const shopSelector = createSelector(
  [shopData],
  (shop) => shop.Collections
);

export const collectionSelector = memoize((collecionIdParam) => createSelector(
  [shopSelector],
  (collections) => collections.find((collection)=>collection.id === COLLECTION_ID_MAP[collecionIdParam])
));