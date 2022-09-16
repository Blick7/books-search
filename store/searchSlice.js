import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchInput: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      const search = action.payload;
      state.searchInput = search;
    },
  },
});

export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;
