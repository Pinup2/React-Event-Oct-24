import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/createStore';

type User = {
  email: string | null,
  password: string | null,
  isAuthorized: boolean,
}

type AuthPayload = {
  email: string;
  password: string;
};

const initialState: User = {
  email: null,
  password: null,
  isAuthorized: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthUser(state, { payload }: PayloadAction<AuthPayload>) {
      state.email = payload.email;
      state.password = payload.password;
    },
    setIsAuthorized(state, { payload }: PayloadAction<boolean>) {
      state.isAuthorized = payload;
    },
  },
});

export const { setAuthUser, setIsAuthorized } = authSlice.actions;
export const selectIsAuthorized = (state: RootState) => state.auth.isAuthorized;
export default authSlice.reducer;
