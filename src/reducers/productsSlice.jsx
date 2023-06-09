import { createSlice } from '@reduxjs/toolkit';
import { storeData } from 'assets/data/Data';

// export const productSlice = createSlice({
//   name: 'products',
//   initialState: {
//     filteredProducts: JSON.parse(sessionStorage.getItem('filteredData')) || storeData,
//     singleProduct: JSON.parse(sessionStorage.getItem('oneProduct')) || storeData
//   },
//   reducers: {
//     filterProducts(state, action) {
//       try {
//         const filter = storeData.filter(
//           (product) => product.type === action.payload
//         );
//         state.filteredProducts = filter;
//         console.log('filter', filter)
//         const saveState = JSON.stringify(filter);
//         sessionStorage.setItem('filteredData', saveState);
//       } catch (error) {
//         return error;
//       }
//     },
//     singleProduct(state, action) {
//       try {
//         const oneProduct = storeData.filter((product) => product.id === action.payload);
//         state.singleProduct = oneProduct;
//         const saveState = JSON.stringify(oneProduct);
//         sessionStorage.setProduct('oneProduct', saveState);
//         console.log('oneProduct', oneProduct);
//       } catch (error) {
//         return error
//       }
//     }
//   }
// });

// export const {
//   filterProducts,
//   singleProduct
// } = productSlice.actions;
// export default productSlice.reducer;

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    filteredProducts:
      JSON.parse(sessionStorage.getItem('filteredData')) || storeData,
    singleProduct:
      JSON.parse(sessionStorage.getItem('singleProduct')) || storeData,
    error: false
  },
  reducers: {
    filterProducts(state, action) {
      try {
        const filter = storeData.filter(
          (product) => product.type === action.payload
        );
        state.filteredProducts = filter;
        state.error = false;
        const savedState = JSON.stringify(filter);
        sessionStorage.setItem('filteredData', savedState);
      } catch (err) {
        return err;
      }
    },
    singleProduct(state, action) {
      try {
        const oneProduct = state.filteredProducts.filter(
          (product) => product.id === action.payload
        );
        state.singleProduct = oneProduct;
        const savedState = JSON.stringify(oneProduct);
        sessionStorage.setItem('singleProduct', savedState);
      } catch (err) {
        return err;
      }
    }
  }
});

export const {
  filterProducts,
  singleProduct
} = productSlice.actions;
export default productSlice.reducer;