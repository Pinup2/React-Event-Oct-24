import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/createStore';

type User = {
  token: string | null,
  isAuthorized: boolean,
}

const initialState: User = {
  token: null,
  isAuthorized: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthUser(state, { payload }: PayloadAction<string>) {
      state.token = payload;
    },
    setIsAuthorized(state, { payload }: PayloadAction<boolean>) {
      state.isAuthorized = payload;
    },
  },
});

export const { setAuthUser, setIsAuthorized } = authSlice.actions;
export const selectIsAuthorized = (state: RootState) => state.auth.isAuthorized;
export default authSlice.reducer;
