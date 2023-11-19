import { configureStore } from "@reduxjs/toolkit";

import incomeReducer from "./features/income/incomeSlice";
import expenseReducer from "./features/expense/expenseSlice";
import savingsReducer from "./features/savings/savingsSlice";

export const store = configureStore({
  reducer: {
    income: incomeReducer,
    expense: expenseReducer,
    savings: savingsReducer,
  },
});
