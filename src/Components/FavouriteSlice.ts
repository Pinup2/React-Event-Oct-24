import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface FavouritesState {
  favourites: string[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: FavouritesState = {
  favourites: [],
  status: 'idle',
  error: null,
};

export const addToFavourites = createAsyncThunk(
  'favourites/addToFavourites',
  async ({ requestId, token }: { requestId: string; token: string }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`http://localhost:4040/api-docs/#/default/post_api_user_favourites`, { requestId }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return { requestId, data: response.data }; 
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Error adding to favourites');
    }
  }
);


export const removeFromFavourites = createAsyncThunk(
  'favourites/removeFromFavourites',
  async ({ requestId, token }: { requestId: string; token: string }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`http://localhost:4040/api-docs/#/default/post_api_user_favourites${requestId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return { requestId, data: response.data };
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Error removing from favourites');
    }
  }
);

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToFavourites.pending, (state) => {
        state.status = 'loading'; 
      })
      .addCase(addToFavourites.fulfilled, (state, action) => {
        state.favourites.push(action.payload.requestId); 
        state.status = 'succeeded'; 
      })
      .addCase(addToFavourites.rejected, (state, action) => {
        state.status = 'failed';  
        state.error = action.payload as string;
      })
      .addCase(removeFromFavourites.pending, (state) => {
        state.status = 'loading';  
      })
      .addCase(removeFromFavourites.fulfilled, (state, action) => {
        state.favourites = state.favourites.filter(
          (id) => id !== action.payload.requestId
        ); 
        state.status = 'succeeded'; 
      })
      .addCase(removeFromFavourites.rejected, (state, action) => {
        state.status = 'failed';  
        state.error = action.payload as string;
      });
  },
});

export default favouritesSlice.reducer;