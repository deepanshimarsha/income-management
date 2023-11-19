import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchIncome = createAsyncThunk("income/fetchIncome", async () => {
  const response = await axios.get(
    "https://income-management-api.deepanshisharm2.repl.co/api/v1/income"
  );
  return response.data;
});

export const postIncome = createAsyncThunk(
  "income/fetchIncome",
  async (newIncome) => {
    const response = await axios.get(
      "https://income-management-api.deepanshisharm2.repl.co/api/v1/income",
      newIncome
    );
    return response.data;
  }
);

const expenseSlice = createSlice({
  name: "expense",
  initialState: {
    entries: [],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [fetchIncome.pending]: (state) => {
      state.laoding = true;
    },
    [fetchIncome.fulfilled]: (state, action) => {
      state.posts = action.payload.posts;
      state.laoding = false;
      state.error = "";
    },
    [fetchIncome.rejected]: (state, action) => {
      state.error = action.error.message;
      state.laoding = false;
    },
  },
});

export const { addExpense, setExpenseLoading } = expenseSlice.actions;
export default expenseSlice.reducer;
