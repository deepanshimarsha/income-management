import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const savingsSlice = createSlice({
  name: "savings",
  initialState: {
    entries: [],
    loading: false,
  },
  reducers: {
    addSavings: (state, action) => {
      state.entries.push(action.payload);
    },
    setSavingsLoading: (state, action) => {
      state.loading = action.payload;
    },
    // Other reducers like sort/filter can be added here
  },
});

export const { addSavings, setSavingsLoading } = savingsSlice.actions;
export default savingsSlice.reducer;
