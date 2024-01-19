import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    additem: (state, action) => {
      state.items.push(action.payload);
    },
    removeitem: (state, action) => {
      // action.payload should contain the index of the item to remove
      const indexToRemove = action.payload;
      if (indexToRemove >= 0 && indexToRemove < state.items.length) {
        state.items.splice(indexToRemove, 1);
      }
    },
  },
});

export const { additem, removeitem } = cartSlice.actions;
export default cartSlice.reducer;
