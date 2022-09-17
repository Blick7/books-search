import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchInput: '',
  items: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      const search = action.payload;
      state.searchInput = search;
    },
    setItems: (state, action) => {
      const items = action.payload;
      state.items = items;
    },
  },
});

export const { setSearch, setItems } = searchSlice.actions;

export default searchSlice.reducer;
