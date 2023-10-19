import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseUrl from "../../../utils/baseUrl";
import axios from "axios";

export const fetchAdharProofsAction = createAsyncThunk(
  "adress-proof/fetch",
  async (leave, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(`${baseUrl}/api/hr-letters`);
      return data;
    } catch (error) {
      if (!error?.responce) throw error;
      return rejectWithValue(error?.responce?.data);
    }
  }
);

const adressSlices = createSlice({
  name: "address-proofs",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAdharProofsAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchAdharProofsAction.fulfilled, (state, action) => {
      state.loading = false;
      state.pdfs = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchAdharProofsAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
  },
});

export default adressSlices.reducer;
