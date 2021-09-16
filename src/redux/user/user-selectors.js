import { createSelector } from "reselect";

const userData = (state) => state.user;

export const currentUserSelector = createSelector(
  [userData],
  (user) => user.currentUser
);
