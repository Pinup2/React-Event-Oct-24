import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slice/authSlice';
import favouritesReducer from '../Components/FavouriteSlice'; 


const store = configureStore({
  reducer: {
    auth: authReducer,
    favourites: favouritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
