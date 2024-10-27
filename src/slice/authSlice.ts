import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/createStore';

type User = {
  token: string | null,
  isAuthorized: boolean,
  userData: object,
}

const initialState: User = {
  token: null,
  isAuthorized: false,
  userData: {},
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
    setUserData(state, { payload }: PayloadAction<object>) {
      state.userData = payload;
    }
  },
});

export const { setAuthUser, setIsAuthorized, setUserData } = authSlice.actions;
export const selectIsAuthorized = (state: RootState) => state.auth.isAuthorized;
export const selectSetAuthUser = (state: RootState) => state.auth.token;
export default authSlice.reducer;
