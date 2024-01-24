import { createSlice } from '@reduxjs/toolkit';
import { getAllCarsThunk } from './operations';
import { toast } from 'react-toastify';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    page: 1,
    items: [],
    favorItems: [],
    modal: {
      car: {},
    },
    favore: false,
    isLoading: false,
    error: '',
    isModalOpen: false,
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
    addCar: (state, { payload }) => {
      state.favorItems.push(payload);
      toast.success(
        `${payload.make} ${payload.model} is added to "Favorites"!`
      );
    },
    deleteCar: (state, { payload }) => {
      state.favorItems = state.favorItems.filter(item => item.id !== payload);
      toast.info(
        `T${payload.make} ${payload.model} is removed from "Favorites"!`
      );
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

export const { modalOpen, modalCar, loadMore, addCar, deleteCar } =
  carsSlice.actions;
export const carsReducer = carsSlice.reducer;
