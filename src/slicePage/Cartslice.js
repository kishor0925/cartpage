import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems : [],
}

const cartSlice =  createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addtoCart(state, action){
           const item = action.payload;
           const existingItem = state.cartItems.find(i => i.id === item.id);

           if(existingItem)
           {
               existingItem.quantity  += 1;
           }
           else
           {
               state.cartItems.push({...item, quantity : 1})
           }

        },
        removefromCart(state,action) {
            const index = action.payload;
            state.cartItems = state.cartItems.filter(i => i.id !== index);
        }
    }

})

export const { addtoCart, removefromCart} = cartSlice.actions;

export default cartSlice.reducer;