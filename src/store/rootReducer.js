import { combineReducers } from '@reduxjs/toolkit';
import routerSlice from './routerSlice';

export const rootReducer = combineReducers({
  routerSlice: routerSlice,
});
