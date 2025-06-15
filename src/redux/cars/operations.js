import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCars = createAsyncThunk("cars/fetch", async (_, thunkAPI) => {
  try {
    const { data } = await axios.get("/cars");
    return data.cars;
  } catch (err) {
    thunkAPI.rejectWithValue(err.message);
  }
});
