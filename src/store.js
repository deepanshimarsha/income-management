import { configureStore } from "@reduxjs/toolkit";

import incomeReducer from "./features/income/incomeSlice";
import expenseReducer from "./features/expense/expenseSlice";
import savingsReducer from "./features/savings/savingsSlice";
import reportsReducer from "./features/reports/reportsSlice";

export const store = configureStore({
  reducer: {
    income: incomeReducer,
    expense: expenseReducer,
    savings: savingsReducer,
    reports: reportsReducer,
  },
});
