import {configureStore } from '@reduxjs/toolkit'
import cartSlice from './slicePage/Cartslice'

export const store = configureStore({
    reducer : {
        cart : cartSlice
    },
});