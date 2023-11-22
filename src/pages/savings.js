import { useEffect } from "react";
import SavingsForm from "../components/SavingsForm";
import TableListing from "../components/tableListing";
import { useSelector, useDispatch } from "react-redux";
import { fetchSavings, sortSavings } from "../features/savings/savingsSlice";
import { Button } from "react-bootstrap";

export default function Savings() {
  const { savings, loading, error } = useSelector((state) => state.savings);
  console.log(savings, loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSavings());
  }, [dispatch]);
  return (
    <div className="main">
      <h2>Savings</h2>
      <SavingsForm />
      <div className="btn-container">
        <Button
          onClick={() => {
            dispatch(sortSavings());
          }}
        >
          Sort
        </Button>
      </div>
      <TableListing savings={savings} loading={loading} error={error} />
    </div>
  );
}
