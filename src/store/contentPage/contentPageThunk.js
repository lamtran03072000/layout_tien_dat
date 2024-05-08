import { createAsyncThunk } from '@reduxjs/toolkit';
import { contentService } from '../../service/contentService';
import { turnOffloadingAction, turnOnloadingAction } from '../loadingSlice';

export const getContentPageThunk = createAsyncThunk(
  'users/fetchByIdStatus',
  async (language, { dispatch, rejectWithValue }) => {
    dispatch(turnOnloadingAction());

    try {
      const response = await contentService.getContent(language);
      setTimeout(() => {
        dispatch(turnOffloadingAction());
      }, 500);
      return response.data;
    } catch (error) {
      setTimeout(() => {
        dispatch(turnOffloadingAction());
      }, 500);
    }
  },
);
