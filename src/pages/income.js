import { useEffect } from "react";
import IncomeForm from "../components/IncomeForm/IncomeForm";
import { fetchIncome } from "../features/income/incomeSlice";
import { useDispatch, useSelector } from "react-redux";
import TableListing from "../components/tableListing";

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
      <TableListing income={income} loading={loading} error={error} />
    </div>
  );
}
