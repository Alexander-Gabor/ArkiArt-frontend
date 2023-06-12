import { configureStore } from '@reduxjs/toolkit';
import slideReducer from '../reducers/sliderSlice'
import productsReducer from '../reducers/productsSlice'
import userReducer from '../reducers/user'
import cartReducer from '../reducers/cartSlice'

export const store = configureStore({
  reducer: {
    slider: slideReducer,
    products: productsReducer,
    user: userReducer,
    cart: cartReducer
  }
});