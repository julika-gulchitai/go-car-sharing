import { createSlice } from '@reduxjs/toolkit';
import { getAllCarsThunk } from './operations';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    modal: {
      car: {},
    },
    page: 1,
    isLoading: false,
    isModalOpen: false,
    error: '',
  },
  reducers: {
    loadMore: (state, { payload }) => {
      state.page = payload;
    },
    modalOpen: (state, { payload }) => {
      state.isModalOpen = payload;
    },
    modalCar: (state, { payload }) => {
      state.modal.car = payload;
    },
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

export const { modalOpen, modalCar, loadMore } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
