import { createSlice } from '@reduxjs/toolkit';
import { getContentPageThunk } from './contentPageThunk';

const initialState = {
  content: {},
  language: 'vn',
};

const contentPageSlice = createSlice({
  name: 'contentPageSlice',
  initialState,
  reducers: {
    changeLanguageAction: (state, action) => {
      state.language = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getContentPageThunk.fulfilled, (state, action) => {
      state.content = action.payload;
    });
  },
});

export const { changeLanguageAction } = contentPageSlice.actions;

export default contentPageSlice.reducer;
