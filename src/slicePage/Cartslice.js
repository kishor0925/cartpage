import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems :  JSON.parse(localStorage.getItem("cartItems"))|| [],
    totalAmount : 0,
}
const cartSlice =  createSlice({
    name : 'car t',
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
           localStorage.setItem("cartItems" , JSON.stringify(state.cartItems))
        },
        removefromCart(state,action) {
            const index = action.payload;
            state.cartItems = state.cartItems.filter(i => i.id !== index);
            localStorage.setItem("cartItems" , JSON.stringify(state.cartItems))
        },
        updatequan : (state , action) => {
            const { id, change } = action.payload;
            const items = state.cartItems.find(i => i.id === id);
            if(items)
            {
                items.quantity += change;
                if(items.quantity < 1)
                {
                    items.quantity = 1;
                }
            }
            localStorage.setItem("cartItems" , JSON.stringify(state.cartItems))
        },
        calTotal : (state) => {
            state.totalAmount = state.cartItems.reduce(
                (sum, product) => sum + product.price * product.quantity , 0
            );
        }
    }
})
export const { addtoCart, removefromCart, updatequan,calTotal } = cartSlice.actions;
export default cartSlice.reducer;