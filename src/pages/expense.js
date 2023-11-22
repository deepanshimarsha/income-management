import { useEffect } from "react";
import ExpenseForm from "../components/ExpenseForm";
import TableListing from "../components/tableListing";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import {
  fetchExpense,
  filterExpense,
  sortExpense,
} from "../features/expense/expenseSlice";

export default function Expense() {
  const { expense, loading, error } = useSelector((state) => state.expense);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExpense());
  }, [dispatch]);
  return (
    <div className="main">
      <h2>Expenses</h2>
      <ExpenseForm />
      <div className="btn-container">
        <Button
          onClick={() => {
            dispatch(sortExpense());
          }}
        >
          Sort
        </Button>
        <select
          onChange={(e) => {
            dispatch(filterExpense(e.target.value));
          }}
        >
          <option disabled selected>
            filter by category
          </option>
          <option value="Insurance">Insurance</option>
          <option value="Rent">Rent</option>
          <option value="Taxes">Taxes</option>
          <option value="Electricity">Electricity</option>
          <option value="Interest">Interest</option>
          <option value="Transportation">Transportation</option>
          <option value="Travel">Travel</option>
          <option value="Groceries">Groceries</option>
          <option value="Clothes">Clothes</option>
          <option value="Home Appliances">Home Appliances</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <TableListing expense={expense} loading={loading} error={error} />
    </div>
  );
}
