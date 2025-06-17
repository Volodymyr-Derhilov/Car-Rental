import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const initialState = {
  cars: [],
  totalPages: "",
  isLoading: false,
  error: null
};

const slice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    resetCars(state) {
      state = initialState;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;

        if (action.payload.page > 1) {
          state.cars = [...state.cars, ...action.payload.cars];
        } else {
          state.cars = action.payload.cars;
        }

        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  }
});

export const carsReducer = slice.reducer;
export const { resetCars } = slice.actions;
