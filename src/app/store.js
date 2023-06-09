import { configureStore } from '@reduxjs/toolkit';
import slideReducer from '../reducers/sliderSlice'
import productsReducer from '../reducers/productsSlice'

export const store = configureStore({
  reducer: {
    slider: slideReducer,
    products: productsReducer
  }
});