import { configureStore } from "@reduxjs/toolkit";
import { filtersReduser } from "./filters/filtersSlice";
import { carsReducer } from "./cars/carsSlice";

export const store = configureStore({
  reducer: {
    filters: filtersReduser,
    cars: carsReducer
  }
});
