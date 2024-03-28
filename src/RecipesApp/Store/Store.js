import { configureStore } from "@reduxjs/toolkit";
import { recipesSliceReducer } from './recipesSlice'

export const Store = configureStore({
    reducer:{
        Recipesitem:recipesSliceReducer,
    }
})



