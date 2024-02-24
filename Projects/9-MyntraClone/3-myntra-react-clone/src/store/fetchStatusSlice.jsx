import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "items",
  initialState: {
    fetchDone: false, // FALSE: 'PENDING' and TRUE: 'DONE'
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      return (state.fetchDone = true);
    },
    markFetchingStarted: (state) => {
      return (state.currentlyFetching = true);
    },
    markFetchingFinished: (state) => {
      return (state.currentlyFetching = false);
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;
