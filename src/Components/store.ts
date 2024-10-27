import { configureStore } from '@reduxjs/toolkit';
import favouritesReducer from './FavouriteSlice'; 
import authReducer from '../slice/authSlice';  


const store = configureStore({
  reducer: {
    favourites: favouritesReducer,    
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;