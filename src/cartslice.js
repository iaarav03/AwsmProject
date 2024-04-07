import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    additem: (state, action) => {
      const newItem = action.payload;
      // console.log(newItem.card.info.id);
      const existingItemIndex = state.items.findIndex(
        (item) => item.card.info.id === newItem.card.info.id
      );

      if (existingItemIndex !== -1) {
        // If the item already exists in the cart, increase its quantity
        state.items[existingItemIndex].quantity += 1;
      } else {
        // If the item is not in the cart, add it with quantity 1
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeitem: (state, action) => {
      // action.payload should contain the index of the item to remove
      const {id} = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.card.info.id === id
      );
      if (existingItemIndex !== -1) {
        state.items.splice(existingItemIndex, 1);
      }
     
    },
    increaseItemQuantity: (state, action) => {
      const { id } = action.payload;

      const existingItemIndex = state.items.findIndex(
        (item) => item.card.info.id === id
      );

      state.items[existingItemIndex].quantity += 1;
    },
    decreaseItemQuantity: (state, action) => {
      const { id } = action.payload;
      //  console.log(id);
      const existingItemIndex = state.items.findIndex(
        (item) => item.card.info.id === id
      );

      state.items[existingItemIndex].quantity -= 1;
    },
  },
});
export const selectTotalPrice = ({ cart }) => {
  return cart?.items.reduce((total, cartItem) => {
    console.log(cartItem);
    return total + cartItem.itemPrice * cartItem.quantity;
  }, 0);
};

export const {
  additem,
  removeitem,
  decreaseItemQuantity,
  increaseItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
