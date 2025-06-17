import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCars = createAsyncThunk("cars/fetch", async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const filters = state.filters.filters;

    const params = {
      brand: filters.brand || undefined,
      rentalPrice: filters.rentalPrice || undefined,
      minMileage: filters.minMileage || undefined,
      maxMileage: filters.maxMileage || undefined,
      page: filters.page || 1,
      limit: 12
    };

    const { data } = await axios.get("/cars", { params });
    return {
      ...data,
      page: filters.page
    };
  } catch (err) {
    thunkAPI.rejectWithValue(err.message);
  }
});
