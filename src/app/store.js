import { configureStore } from '@reduxjs/toolkit';
import slideReducer from '../reducers/sliderSlice'
import itemsReducer from '../reducers/itemsSlice'

export const store = configureStore({
  reducer: {
    slider: slideReducer,
    items: itemsReducer
  }
});