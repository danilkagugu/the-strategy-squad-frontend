import { createSlice } from "@reduxjs/toolkit";
import {
  addWaterRecord,
  deleteWaterRecord,
  editWaterRecord,
  getWaterPerDay,
  getWaterPerMonth,
} from "./operations";
import { apiLogoutUser } from "../auth/operations";

const initialState = {
  items: {
    perDay: {
      data: [],
      waterAmount: 0,
    },
    perMonth: [],
  },
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const waterSlice = createSlice({
  name: "water",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getWaterPerDay.pending, handlePending)
      .addCase(getWaterPerDay.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.perDay = action.payload;
      })
      .addCase(getWaterPerDay.rejected, handleRejected)

      .addCase(getWaterPerMonth.pending, handlePending)
      .addCase(getWaterPerMonth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.perMonth = action.payload;
      })
      .addCase(getWaterPerMonth.rejected, handleRejected)

      .addCase(addWaterRecord.pending, handlePending)
      .addCase(addWaterRecord.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.perDay.data.push(action.payload);
        state.items.perMonth.push(action.payload);
        state.items.perDay.waterAmount += action.payload.amount;
      })
      .addCase(addWaterRecord.rejected, handleRejected)

      .addCase(deleteWaterRecord.pending, handlePending)
      .addCase(deleteWaterRecord.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.perDay.data.findIndex(
          (record) => record._id === action.payload._id
        );
        state.items.perDay.data.splice(index, 1);
        state.items.perDay.waterAmount -= action.payload.amount;
        const indexMonth = state.items.perMonth.findIndex(
          (record) => record._id === action.payload._id
        );
        state.items.perMonth.splice(indexMonth, 1);
      })
      .addCase(deleteWaterRecord.rejected, handleRejected)

      .addCase(editWaterRecord.pending, handlePending)
      .addCase(editWaterRecord.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.perDay.find((record) => {
          if (record._id === action.payload._id) {
            record.time = action.payload.time;
            record.amount = action.payload.amount;
          }
        });
      })
      .addCase(editWaterRecord.rejected, handleRejected)

      .addCase(apiLogoutUser.fulfilled, (state) => {
        state.items.perDay = [];
        state.items.perMonth = [];
        state.error = null;
        state.isLoading = false;
      });
  },
});

export const waterReducer = waterSlice.reducer;
