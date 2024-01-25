import { createSlice } from '@reduxjs/toolkit';
import { getAllCarsThunk } from './operations';

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
    filters: {},
    select: '',
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
    },
    deleteCar: (state, { payload }) => {
      state.favorItems = state.favorItems.filter(item => item.id !== payload);
    },
    selectFilters: (state, { payload }) => {
      state.filters = payload;
    },
    selectSelect: (state, { payload }) => {
      state.select = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getAllCarsThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllCarsThunk.fulfilled, (state, action) => {
        state.items.push(...action.payload);

        state.isLoading = false;
      })
      .addCase(getAllCarsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  selectFilters,
  selectSelect,
  modalOpen,
  modalCar,
  loadMore,
  addCar,
  deleteCar,
} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
