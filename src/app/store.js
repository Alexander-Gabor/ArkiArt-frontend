import { configureStore } from '@reduxjs/toolkit';
import slideReducer from '../reducers/sliderSlice'

export const store = configureStore({
  reducer: {
    slider: slideReducer
  }
});