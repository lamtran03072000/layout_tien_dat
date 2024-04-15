import { createAsyncThunk } from '@reduxjs/toolkit';
import { contentService } from '../../service/contentService';

export const getContentPageThunk = createAsyncThunk(
  'users/fetchByIdStatus',
  async (language, { dispatch, rejectWithValue }) => {
    const response = await contentService.getContent(language);
    return response.data;
  },
);
