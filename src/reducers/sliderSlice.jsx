// import { createSlice, configureStore } from '@reduxjs/toolkit';

// export const sliderSlice = createSlice({
//   name: 'slider',
//   initialState: {
//     value: 0,
//     length: 4
//   },
//   reducers: {
//     nextSlide(state, action) {
//       console.log('action', action);
//       console.log('state', state);
//       state.value = action.payload > state.length ? 0 : action.payload;
//     },
//     prevSlide(state, action) {
//       state.value = action.payload < 0 ? state.length : action.payload;
//     },
//     dotSlide() {}
//   }
// })

// export const { nextSlide, prevSlide, dotSlide } = sliderSlice.actions;
// export default sliderSlice.reducers;

import { createSlice } from '@reduxjs/toolkit';
import { sliderData } from '../assets/data/Data'

export const sliderSlice = createSlice({
  name: 'slider',
  initialState: {
    value: 0,
    length: sliderData.length
  },
  reducers: {
    nextSlide(state, action) {
      console.log('action', action);
      console.log('state', state);
      state.value = action.payload > state.length - 1 ? 0 : action.payload;
    },
    prevSlide(state, action) {
      state.value = action.payload < 0 ? state.length - 1 : action.payload;
    }
    // dotSlide(state, action) {
    //   const slide = action.payload;
    //   state.value = slide;
    // }
  }
});

export const { nextSlide, prevSlide, dotSlide } = sliderSlice.actions;
export default sliderSlice.reducer;