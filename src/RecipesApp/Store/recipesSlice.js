import { createSlice } from "@reduxjs/toolkit";
import Data from "../Data.json";

export const recipesSlice = createSlice({
  name: "Recipesitem",
  initialState: Data,
  reducers: {

 

   
  },
});

export const { filterRecipes } = recipesSlice.actions;
export const recipesSliceReducer = recipesSlice.reducer;
