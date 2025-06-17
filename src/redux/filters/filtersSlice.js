import { createSlice } from "@reduxjs/toolkit";
import { fetchBrands } from "./operations";

const initialState = {
  brands: [],
  prices: [30, 40, 50, 60, 70, 80],
  filters: {
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: "",
    page: 1
  }
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters(state, action) {
      state.filters = { ...state.filters, ...action.payload };
    },
    resetFilters(state) {
      state.filters = initialState.filters;
    },
    setPage(state) {
      state.filters.page += 1;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBrands.fulfilled, (state, action) => {
      state.brands = action.payload;
    });
  }
});

export const filtersReduser = slice.reducer;
export const { setFilters, resetFilters, setPage } = slice.actions;
