import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
  email: string | null,
  passwors: string | null,
  isAuthorized: boolean,
}

type AuthPayload = {
  email: string;
  password: string;
};

const initialState: User = {
  email: null,
  passwors: null,
  isAuthorized: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthUser(state, { payload }: PayloadAction<AuthPayload>) {
      state.email = payload.email;
      state.passwors = payload.password;
    },
    setIsAuthorized(state, { payload }: PayloadAction<boolean>) {
      state.isAuthorized = payload;
    },
  },
});

export const { setAuthUser, setIsAuthorized } = authSlice.actions;
export const selectIsAuthorized = (state: { auth: User }) => state.auth.isAuthorized;
export default authSlice.reducer;
