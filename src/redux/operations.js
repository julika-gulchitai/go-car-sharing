import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65ad7e26adbd5aa31be0de7d.mockapi.io/';

// export const fetchCars = createAsyncThunk('fetchCars', async (_, thunkAPI) => {
//   try {
//     const response = await axios.get('carscatalog');
//     return response.data;
//   } catch (e) {
//     return thunkAPI.rejectWithValue(e.message);
//   }
// });

const cars = async () => {
  try {
    const { data } = await axios.get('carscatalog');
    return data;
  } catch (error) {
    console.log('error', error);
  }
};
console.log('cars', cars);
