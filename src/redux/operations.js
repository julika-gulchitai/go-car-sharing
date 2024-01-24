import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://65ad7e26adbd5aa31be0de7d.mockapi.io/';

export const getAllCarsThunk = createAsyncThunk(
  'getCars',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get('carscatalog', {
        params: {
          page,
          limit: 12,
        },
      });
      return response.data;
    } catch (e) {
      toast.error(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
