import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface HelpRequestState {
  data: HelpRequest | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

interface HelpRequest {
  id: string;
  title: string;
  organization: {
    title: string;
    isVerified: boolean;
  };
  description: string;
  goalDescription: string;
  actionsSchedule: { stepLabel: string; isDone: boolean }[];
  endingDate: string;
  location: {
    latitude: number;
    longitude: number;
    district: string;
    city: string;
  };
  contacts: {
    email: string;
    phone: string;
    website: string;
  };
  requesterType: string;
  helpType: string;
  contributorsCount: number;
  requestGoal: number;
  requestGoalCurrentValue: number;
}

// Define an initial state
const initialState: HelpRequestState = {
  data: null,
  status: 'idle',
  error: null,
};

// Async thunk to fetch data
export const fetchHelpRequest = createAsyncThunk(
  'helpRequest/fetchHelpRequest',
  async (id: string) => {
    const response = await axios.get(`/api/request/${id}`);
    return response.data;
  }
);

// Create a slice
const helpRequestSlice = createSlice({
  name: 'helpRequest',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHelpRequest.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchHelpRequest.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchHelpRequest.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch request data';
      });
  },
});

export default helpRequestSlice.reducer;
