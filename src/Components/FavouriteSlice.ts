const favouritesSlice = createSlice({
    name: 'favourites',
    initialState: {
      favourites: [],
      status: 'idle',
      error: null,
    },
  });