import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchShipments = createAsyncThunk("shipments/fetch", async () => {
  const response = await axios.get("http://localhost:5000/api/shipments");
  return response.data;
});

const shipmentSlice = createSlice({
  name: "shipments",
  initialState: { shipments: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShipments.fulfilled, (state, action) => {
      state.shipments = action.payload;
      state.status = "succeeded";
    });
  },
});

export default shipmentSlice.reducer;
