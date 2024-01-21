import { createSlice } from '@reduxjs/toolkit';

const carsInitialState = {
  name: 'cars',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  redusers: {},
};
const carsSlice = createSlice({
  name: 'cars',
  initialState: carsInitialState,
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
      console.log('fetchingSuccess', action.payload);
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  carsSlice.actions;
export const carsReducer = carsSlice.reducer;
