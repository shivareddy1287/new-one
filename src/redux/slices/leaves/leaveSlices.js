import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "../../../utils/baseUrl";

//action to redirect
const resetApproveLeave = createAction("leaveApprove/reset");
const resetCancelLeave = createAction("leaveCancel/reset");
const resetApplyLeave = createAction("leaveApply/reset");

//Apply leave Action
export const applyLeaveAction = createAsyncThunk(
  "leave/apply",
  async (leave, { rejectWithValue, getState, dispatch }) => {
    console.log("started", `${baseUrl}/api/leave`);
    try {
      const { data } = await axios.post(`${baseUrl}/api/leave`, leave);
      dispatch(resetApplyLeave());
      return data;
    } catch (error) {
      console.log(error);
      if (!error?.responce) throw error;
      return rejectWithValue(error?.responce?.data);
    }
  }
);

export const fetchAllLeaves = createAsyncThunk(
  "leaves/fetch",
  async (id, { rejectWithValue, getState, dispatch }) => {
    console.log("yes");
    try {
      const { data } = await axios.get(`${baseUrl}/api/leave`);
      console.log("data", data);
      return data;
    } catch (error) {
      if (!error?.responce) throw error;
      return rejectWithValue(error?.responce?.data);
    }
  }
);

export const fetchLeaveAction = createAsyncThunk(
  "leave/record",
  async (id, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(`${baseUrl}/api/leave/${id}`);
      return data;
    } catch (error) {
      if (!error?.responce) throw error;
      return rejectWithValue(error?.responce?.data);
    }
  }
);

export const approveLeaveAction = createAsyncThunk(
  "leave/approve",
  async (id, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.put(`${baseUrl}/api/leave/${id}`);
      //dispatch redirect action
      dispatch(resetApproveLeave());
      return data;
    } catch (error) {
      if (!error?.responce) throw error;
      return rejectWithValue(error?.responce?.data);
    }
  }
);

export const cancelLeaveAction = createAsyncThunk(
  "leave/cancel",
  async (id, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.put(
        `${baseUrl}/api/leave/cancelLeave/${id}`
      );
      dispatch(resetCancelLeave());
      return data;
    } catch (error) {
      if (!error?.responce) throw error;
      return rejectWithValue(error?.responce?.data);
    }
  }
);

//slice

const leaveSlice = createSlice({
  name: "leave",
  initialState: {},
  extraReducers: (builder) => {
    //apply leave
    builder.addCase(applyLeaveAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(resetApplyLeave, (state, action) => {
      state.isApplied = true;
    });
    builder.addCase(applyLeaveAction.fulfilled, (state, action) => {
      state.leaveApplied = action?.payload;
      state.isApplied = false;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(applyLeaveAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //fetch all leaves

    builder.addCase(fetchAllLeaves.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchAllLeaves.fulfilled, (state, action) => {
      state.loading = false;
      state.allLeaves = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchAllLeaves.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //fetch leave action
    builder.addCase(fetchLeaveAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchLeaveAction.fulfilled, (state, action) => {
      state.loading = false;
      state.leave = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchLeaveAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //approveLeaveAction
    builder.addCase(approveLeaveAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(resetApproveLeave, (state, action) => {
      state.isApproved = true;
    });
    builder.addCase(approveLeaveAction.fulfilled, (state, action) => {
      state.loading = false;
      state.isApproved = false;
      state.leave = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(approveLeaveAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //cancelLeaveAction
    builder.addCase(cancelLeaveAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(resetCancelLeave, (state, action) => {
      state.isApproved = true;
    });

    builder.addCase(cancelLeaveAction.fulfilled, (state, action) => {
      state.loading = false;
      state.isApproved = false;
      state.leave = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(cancelLeaveAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
  },
});

export default leaveSlice.reducer;
