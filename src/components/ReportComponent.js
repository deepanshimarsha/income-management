export default function ReportComponent({ reportType, data }) {
  if (reportType === "incomeVsExpenses") {
    return (
      <div>
        <div className="report-content">
          <h4>Income vs. Expenses Report</h4>

          <p>Total Income: ${data.income}</p>
          <p>Total Expenses: ${data.expenses}</p>
          <p>Savings: ${data.income - data.expenses}</p>
        </div>
      </div>
    );
  } else if (reportType === "expenseBreakdown") {
    return (
      <div>
        <div className="report-content">
          <h4>Expense Breakdown Report</h4>

          <ul>
            {data.categories.map((category) => (
              <li key={category.category}>
                {category.category}: ${category.amount}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  } else {
    return <p>Select a report type and click "Generate Report."</p>;
  }
}
