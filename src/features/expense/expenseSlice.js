import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchExpense = createAsyncThunk(
  "expense/fetchExpense",
  async () => {
    const response = await axios.get(
      "https://income-management-api.deepanshisharm2.repl.co/api/v1/expense"
    );

    return response.data;
  }
);

export const postExpense = createAsyncThunk(
  "expense/postExpense",
  async (newExpense) => {
    const response = await axios.post(
      "https://income-management-api.deepanshisharm2.repl.co/api/v1/expense",
      newExpense
    );
    return response.data;
  }
);

export const sortExpense = createAsyncThunk("expense/sortIncome", async () => {
  const response = await axios.get(
    "https://income-management-api.deepanshisharm2.repl.co/api/v1/expense/sort"
  );
  return response.data;
});

export const filterExpense = createAsyncThunk(
  "expense/filterExpense",
  async (category) => {
    const response = await axios.get(
      `https://income-management-api.deepanshisharm2.repl.co/api/v1/expense/${category}`
    );
    return response.data;
  }
);

export const updateExpense = createAsyncThunk(
  "expense/updateExpense",
  async ({ expenseId, updatedFields }) => {
    const response = await axios.put(
      `https://income-management-api.deepanshisharm2.repl.co/api/v1/expense/${expenseId}`,
      updatedFields
    );

    return response.data;
  }
);

export const deleteExpense = createAsyncThunk(
  "expense/deleteExpense",
  async (expenseId) => {
    const response = await axios.delete(
      `https://income-management-api.deepanshisharm2.repl.co/api/v1/expense/${expenseId}`
    );

    return response.data;
  }
);

const expenseSlice = createSlice({
  name: "expense",
  initialState: {
    expense: [],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [fetchExpense.pending]: (state) => {
      state.loading = true;
    },
    [fetchExpense.fulfilled]: (state, action) => {
      state.expense = action.payload.expense;
      state.loading = false;
      state.error = "";
    },
    [fetchExpense.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
    [sortExpense.pending]: (state) => {
      state.loading = true;
    },
    [sortExpense.fulfilled]: (state, action) => {
      state.expense = action.payload.expense;
      state.loading = false;
      state.error = "";
    },
    [sortExpense.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },

    [filterExpense.pending]: (state) => {
      state.loading = true;
    },
    [filterExpense.fulfilled]: (state, action) => {
      state.expense = action.payload.expense;
      state.loading = false;
      state.error = "";
    },
    [filterExpense.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
    [postExpense.pending]: (state) => {
      state.loading = true;
    },
    [postExpense.fulfilled]: (state, action) => {
      state.expense.push(action.payload.expense);
      state.loading = false;
      state.error = "";
    },
    [postExpense.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
    [deleteExpense.pending]: (state) => {
      state.loading = true;
    },
    [deleteExpense.fulfilled]: (state, action) => {
      state.expense = state.expense.filter(
        (item) => item._id !== action.payload.expense._id
      );
      state.loading = false;
      state.error = "";
    },
    [deleteExpense.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
    [updateExpense.pending]: (state) => {
      state.loading = true;
    },
    [updateExpense.fulfilled]: (state, action) => {
      state.expense = state.expense.map((item) => {
        if (item._id === action.payload.expense._id) {
          return action.payload.expense;
        } else {
          return item;
        }
      });
      state.loading = false;
      state.error = "";
    },
    [updateExpense.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
  },
});

export const { addExpense, setExpenseLoading } = expenseSlice.actions;
export default expenseSlice.reducer;
