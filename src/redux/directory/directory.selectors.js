import { createSelector } from "reselect";

const directoryData = (state) => state.directory;

export const directorySelector = createSelector(
    [directoryData],
    (directory)=> directory.sections
)