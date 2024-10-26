import { configureStore } from '@reduxjs/toolkit';
import helpRequestReducer from './helpRequestSlice';

export const store = configureStore({
  reducer: {
    helpRequest: helpRequestReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
