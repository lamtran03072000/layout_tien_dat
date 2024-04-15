import { createSlice } from '@reduxjs/toolkit';
import { getContentPageThunk } from './contentPageThunk';

const initialState = {
  content: {},
};

const contentPageSlice = createSlice({
  name: 'contentPageSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getContentPageThunk.fulfilled, (state, action) => {
      state.content = action.payload;
    });
  },
});

export const {} = contentPageSlice.actions;

export default contentPageSlice.reducer;
