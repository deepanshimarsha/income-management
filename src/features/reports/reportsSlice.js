import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchIncome = createAsyncThunk("income/fetchIncome", async () => {
  const response = await axios.get(
    "https://income-management-api.deepanshisharm2.repl.co/api/v1/income"
  );
  return response.data;
});
export const fetchExpenses = createAsyncThunk(
  "expenses/fetchExpenses",
  async () => {
    const response = await axios.get(
      "https://income-management-api.deepanshisharm2.repl.co/api/v1/expense"
    );

    return response.data;
  }
);
export const fetchSavings = createAsyncThunk(
  "savings/fetchSavings",
  async () => {
    const response = await axios.get(
      "https://income-management-api.deepanshisharm2.repl.co/api/v1/savings"
    );
    return response.data;
  }
);

const reportsSlice = createSlice({
  name: "reports",
  initialState: {
    incomeAmt: 0,
    expensesAmt: 0,
    savingsAmt: 0,
    expenses: [],
    loading: false,
    error: "",
  },
  extraReducers: {
    [fetchSavings.pending]: (state) => {
      state.loading = true;
    },
    [fetchSavings.fulfilled]: (state, action) => {
      const savings = action.payload.savings;
      state.savingsAmt = savings.reduce((acc, curr) => acc + curr.amount, 0);
      state.loading = false;
      state.error = "";
    },
    [fetchSavings.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
    [fetchIncome.pending]: (state) => {
      state.loading = true;
    },
    [fetchIncome.fulfilled]: (state, action) => {
      const income = action.payload.income;
      state.incomeAmt = income.reduce((acc, curr) => acc + curr.amount, 0);
      state.loading = false;
      state.error = "";
    },
    [fetchIncome.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },

    [fetchExpenses.pending]: (state) => {
      state.loading = true;
    },
    [fetchExpenses.fulfilled]: (state, action) => {
      const expenses = action.payload.expense;
      state.expenses = expenses;
      state.expensesAmt = expenses.reduce((acc, curr) => acc + curr.amount, 0);
      state.loading = false;
      state.error = "";
    },
    [fetchExpenses.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
  },
});

export default reportsSlice.reducer;
