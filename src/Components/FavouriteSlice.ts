const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: {
    favourites: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addToFavourites: (state, action) => {
      // Handle adding to favorites
    },
    removeFromFavourites: (state, action) => {
      // Handle removing from favorites
    },
  },
});

export const { addToFavourites, removeFromFavourites } =
  favouritesSlice.actions;
export default favouritesSlice.reducer;
