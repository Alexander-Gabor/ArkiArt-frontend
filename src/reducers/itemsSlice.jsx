import { createSlice } from '@reduxjs/toolkit';
import { storeData } from 'assets/data/Data';

export const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    filteredItems: JSON.parse(sessionStorage.getItem('filteredData')) || storeData
  },
  reducers: {
    filterItems(state, action) {
      try {
        const filter = storeData.filter(
          (item) => item.type === action.payload
        );
        state.filteredItems = filter;
        console.log('filter', filter)
        const saveState = JSON.stringify(filter);
        sessionStorage.setItem('filteredData', saveState);
      } catch (error) {
        return error;
      }
    }
  }
});

export const { filterItems } = itemsSlice.actions;
export default itemsSlice.reducer;