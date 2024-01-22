import { createSlice } from '@reduxjs/toolkit';
import { getAllCarsThunk } from './operations';

// const carsInitialState = {
//   name: 'cars',
//   initialState:
//   redusers: {},
// };
const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    isLoading: false,
    error: '',
  },
  extraReducers: builder => {
    builder
      .addCase(getAllCarsThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllCarsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        console.log(state.items);
        state.isLoading = false;
        state.error = '';
      })
      .addCase(getAllCarsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  carsSlice.actions;
export const carsReducer = carsSlice.reducer;
