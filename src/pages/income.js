import { useEffect } from "react";
import IncomeForm from "../components/IncomeForm/IncomeForm";
import {
  fetchIncome,
  filterIncome,
  sortIncome,
} from "../features/income/incomeSlice";
import { useDispatch, useSelector } from "react-redux";
import TableListing from "../components/tableListing";
import { Button } from "react-bootstrap";

export default function Income() {
  const { income, loading, error } = useSelector((state) => {
    console.log(state);
    return state.income;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchIncome());
  }, [dispatch]);
  return (
    <div className="main">
      <h2>Income</h2>
      <IncomeForm />
      <div className="btn-container">
        <Button
          onClick={() => {
            dispatch(sortIncome());
          }}
        >
          Sort
        </Button>
        <select
          onChange={(e) => {
            dispatch(filterIncome(e.target.value));
          }}
        >
          <option disabled selected>
            filter by category
          </option>
          <option value="Active">Active</option>
          <option value="Passive">Passive</option>
          <option value="Investment">Investment</option>
        </select>
      </div>
      <TableListing income={income} loading={loading} error={error} />
    </div>
  );
}
