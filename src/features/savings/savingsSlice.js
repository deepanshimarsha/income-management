import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSavings = createAsyncThunk(
  "savings/fetchSavings",
  async () => {
    const response = await axios.get(
      "https://income-management-api.deepanshisharm2.repl.co/api/v1/savings"
    );
    return response.data;
  }
);

export const postSavings = createAsyncThunk(
  "savings/postSavings",
  async (newSavings) => {
    const response = await axios.post(
      "https://income-management-api.deepanshisharm2.repl.co/api/v1/savings",
      newSavings
    );
    return response.data;
  }
);

export const sortSavings = createAsyncThunk("savings/sortSavings", async () => {
  const response = await axios.get(
    "https://income-management-api.deepanshisharm2.repl.co/api/v1/savings/sort"
  );
  return response.data;
});

export const filterSavings = createAsyncThunk(
  "savings/filterSavings",
  async (category) => {
    const response = await axios.get(
      `https://income-management-api.deepanshisharm2.repl.co/api/v1/savings/${category}`
    );
    return response.data;
  }
);

export const updateSavings = createAsyncThunk(
  "savings/updateSavings",
  async ({ savingsId, updatedFields }) => {
    const response = await axios.put(
      `https://income-management-api.deepanshisharm2.repl.co/api/v1/savings/${savingsId}`,
      updatedFields
    );

    return response.data;
  }
);

export const deleteSavings = createAsyncThunk(
  "savings/deleteSavings",
  async (savingsId) => {
    const response = await axios.delete(
      `https://income-management-api.deepanshisharm2.repl.co/api/v1/savings/${savingsId}`
    );
    return response.data;
  }
);

const savingsSlice = createSlice({
  name: "savings",
  initialState: {
    savings: [],
    loading: false,
    error: "",
  },
  extraReducers: {
    [fetchSavings.pending]: (state) => {
      state.loading = true;
    },
    [fetchSavings.fulfilled]: (state, action) => {
      state.savings = action.payload.savings;
      state.loading = false;
      state.error = "";
    },
    [fetchSavings.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
    [sortSavings.pending]: (state) => {
      state.loading = true;
    },
    [sortSavings.fulfilled]: (state, action) => {
      state.savings = action.payload.savings;
      state.loading = false;
      state.error = "";
    },
    [sortSavings.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },

    [filterSavings.pending]: (state) => {
      state.loading = true;
    },
    [filterSavings.fulfilled]: (state, action) => {
      state.savings = action.payload.savings;
      state.loading = false;
      state.error = "";
    },
    [filterSavings.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
    [postSavings.pending]: (state) => {
      state.loading = true;
    },
    [postSavings.fulfilled]: (state, action) => {
      state.savings.push(action.payload.savings);
      state.loading = false;
      state.error = "";
    },
    [postSavings.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
    [deleteSavings.pending]: (state) => {
      state.loading = true;
    },
    [deleteSavings.fulfilled]: (state, action) => {
      state.savings = state.savings.filter(
        (item) => item._id !== action.payload.savings._id
      );
      state.loading = false;
      state.error = "";
    },
    [deleteSavings.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
    [updateSavings.pending]: (state) => {
      state.loading = true;
    },
    [updateSavings.fulfilled]: (state, action) => {
      state.savings = state.savings.map((item) => {
        if (item._id === action.payload.savings._id) {
          return action.payload.savings;
        } else {
          return item;
        }
      });
      state.loading = false;
      state.error = "";
    },
    [updateSavings.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
  },
});

export const { addSavings, setSavingsLoading } = savingsSlice.actions;
export default savingsSlice.reducer;
