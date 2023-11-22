import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReportComponent from "../components/ReportComponent";
import {
  fetchExpenses,
  fetchIncome,
  fetchSavings,
} from "../features/reports/reportsSlice";

export default function Reports() {
  const [reportType, setReportType] = useState("incomeVsExpenses");

  const { incomeAmt, expensesAmt, savingsAmt, expenses } = useSelector(
    (state) => state.reports
  );

  console.log(incomeAmt, expensesAmt, savingsAmt, expenses);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExpenses());
    dispatch(fetchIncome());
    dispatch(fetchSavings());
  }, [dispatch]);
  return (
    <div className="main">
      <h3>Reports</h3>
      <div>
        <select
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
        >
          <option value="incomeVsExpenses">Income vs. Expenses</option>
          <option value="expenseBreakdown">Expense Breakdown</option>
        </select>

        <ReportComponent
          reportType={reportType}
          data={{
            income: incomeAmt,
            expenses: expensesAmt,
            savings: savingsAmt,
            categories: expenses,
          }}
        />
      </div>
    </div>
  );
}
