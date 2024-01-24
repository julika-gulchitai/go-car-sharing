import { createSlice } from '@reduxjs/toolkit';
import { getAllCarsThunk } from './operations';
import { toast } from 'react-toastify';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    page: 1,
    items: [],
    modal: {
      car: {},
    },

    isLoading: false,
    error: '',
    isModalOpen: false,
    favorite: [],
  },
  reducers: {
    loadMore: (state, { payload }) => {
      state.page += 1;
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
        state.items.push(...action.payload);
        console.log(state.items);
        state.isLoading = false;
      })
      .addCase(getAllCarsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { modalOpen, modalCar, loadMore } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
