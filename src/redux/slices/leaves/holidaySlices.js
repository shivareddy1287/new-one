import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";

//redirect actions
const resetAddHoliday = createAction("addHoliday/reset");

export const addHolidayAction = createAsyncThunk(
  "holiday/add",
  async (holiday, { rejectWithValue, getState, dispatch }) => {
    console.log(holiday);
    try {
      const { data } = await axios.post(`${baseUrl}/api/holiday`, holiday);
      dispatch(resetAddHoliday());
      return data;
    } catch (error) {
      if (!error?.responce) throw error;
      return rejectWithValue(error?.responce?.data);
    }
  }
);

export const fetchHolidaysAction = createAsyncThunk(
  "holidays/fetch",
  async (holiday, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(`${baseUrl}/api/holiday`);
      return data;
    } catch (error) {
      if (!error?.responce) throw error;
      return rejectWithValue(error?.responce?.data);
    }
  }
);

const holidaySlice = createSlice({
  name: "Holiday",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(addHolidayAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(resetAddHoliday, (state, action) => {
      state.isHolidayAdded = true;
    });
    builder.addCase(addHolidayAction.fulfilled, (state, action) => {
      state.loading = true;
      state.isHolidayAdded = false;
      state.holiday = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(addHolidayAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //fetchHolidaysAction
    builder.addCase(fetchHolidaysAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchHolidaysAction.fulfilled, (state, action) => {
      state.loading = false;
      state.allHolidays = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchHolidaysAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
  },
});

export default holidaySlice.reducer;
