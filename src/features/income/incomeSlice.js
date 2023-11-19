import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchIncome = createAsyncThunk("income/fetchIncome", async () => {
  const response = await axios.get(
    "https://income-management-api.deepanshisharm2.repl.co/api/v1/income"
  );
  return response.data;
});

export const postIncome = createAsyncThunk(
  "income/postIncome",
  async (newIncome) => {
    const response = await axios.post(
      "https://income-management-api.deepanshisharm2.repl.co/api/v1/income",
      newIncome
    );
    return response.data;
  }
);

export const sortIncome = createAsyncThunk("income/sortIncome", async () => {
  const response = await axios.get(
    "https://income-management-api.deepanshisharm2.repl.co/api/v1/income/sort"
  );
  return response.data;
});

export const filterIncome = createAsyncThunk(
  "income/filterIncome",
  async (category) => {
    const response = await axios.get(
      `https://income-management-api.deepanshisharm2.repl.co/api/v1/income/${category}`
    );
    return response.data;
  }
);

export const updateIncome = createAsyncThunk(
  "income/updateIncome",
  async ({ incomeId, updatedFields }) => {
    const response = await axios.put(
      `https://income-management-api.deepanshisharm2.repl.co/api/v1/income/${incomeId}`,
      updatedFields
    );

    return response.data;
  }
);

export const deleteIncome = createAsyncThunk(
  "income/deleteIncome",
  async (incomeId) => {
    const response = await axios.delete(
      `https://income-management-api.deepanshisharm2.repl.co/api/v1/income/${incomeId}`
    );
    return response.data;
  }
);

const incomeSlice = createSlice({
  name: "income",
  initialState: {
    income: [],
    loading: false,
    error: "",
  },
  extraReducers: {
    [fetchIncome.pending]: (state) => {
      state.loading = true;
    },
    [fetchIncome.fulfilled]: (state, action) => {
      state.income = action.payload.income;
      state.loading = false;
      state.error = "";
    },
    [fetchIncome.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
    [sortIncome.pending]: (state) => {
      state.loading = true;
    },
    [sortIncome.fulfilled]: (state, action) => {
      state.income = action.payload.income;
      state.loading = false;
      state.error = "";
    },
    [sortIncome.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },

    [filterIncome.pending]: (state) => {
      state.loading = true;
    },
    [filterIncome.fulfilled]: (state, action) => {
      state.income = action.payload.income;
      state.loading = false;
      state.error = "";
    },
    [filterIncome.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
    [postIncome.pending]: (state) => {
      state.loading = true;
    },
    [postIncome.fulfilled]: (state, action) => {
      state.income.push(action.payload.income);
      state.loading = false;
      state.error = "";
    },
    [postIncome.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
    [deleteIncome.pending]: (state) => {
      state.loading = true;
    },
    [deleteIncome.fulfilled]: (state, action) => {
      state.income = state.income.filter(
        (item) => item._id !== action.payload.income._id
      );
      state.loading = false;
      state.error = "";
    },
    [deleteIncome.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
    [updateIncome.pending]: (state) => {
      state.loading = true;
    },
    [updateIncome.fulfilled]: (state, action) => {
      state.income = state.income.map((item) => {
        if (item._id === action.payload.income._id) {
          return action.payload.income;
        } else {
          return item;
        }
      });
      state.loading = false;
      state.error = "";
    },
    [updateIncome.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
  },
});

export const { addIncome } = incomeSlice.actions;
export default incomeSlice.reducer;
