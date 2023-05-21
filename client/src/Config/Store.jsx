import { configureStore } from "@reduxjs/toolkit";
import basketReducer from '../../src/Components/BasketSlice/BasketSlice'

export const store = configureStore({
    reducer:{
        basket:basketReducer
    }
})
