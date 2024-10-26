import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/createStore';

type User = {
  token: string | null,
  isAuthorized: boolean,
}

type AuthPayload = {
  token: string;
  password: string;
};

const initialState: User = {
  token: null,
  isAuthorized: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthUser(state, { payload }: PayloadAction<AuthPayload>) {
      state.token = payload.token;
    },
    setIsAuthorized(state, { payload }: PayloadAction<boolean>) {
      state.isAuthorized = payload;
    },
  },
});

export const { setAuthUser, setIsAuthorized } = authSlice.actions;
export const selectIsAuthorized = (state: RootState) => state.auth.isAuthorized;
export default authSlice.reducer;
