import { createSlice } from '@reduxjs/toolkit';
import { getAllCarsThunk } from './operations';
import { toast } from 'react-toastify';

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
    favorite: [],
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
    addToFavorites: (state, { payload }) => {
      state.favItems.push(payload);
      toast.success(
        `${payload.make} ${payload.model} is added to "Favorites"!`
      );
    },
    removeFromFavorites: (state, { payload }) => {
      state.favItems = state.favItems.filter(item => item.id !== payload);
      toast.info(`The car is removed from "Favorites"!`);
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
