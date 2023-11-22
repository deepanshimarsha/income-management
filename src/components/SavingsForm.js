import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postSavings } from "../features/savings/savingsSlice";

export default function SavingsForm() {
  const dispatch = useDispatch();
  const [newSavings, setNewSavings] = useState({
    amount: "",
    description: "",
  });
  return (
    <div className="form">
      <div>
        <input
          type="number"
          value={newSavings.amount}
          placeholder="Enter Amount"
          onChange={(e) => {
            setNewSavings((prev) => ({ ...prev, amount: e.target.value }));
          }}
        />
      </div>
      <div>
        <input
          value={newSavings.description}
          type="text"
          placeholder="Enter Description"
          onChange={(e) => {
            setNewSavings((prev) => ({ ...prev, description: e.target.value }));
          }}
        />
      </div>

      <Button
        variant="primary"
        type="submit"
        onClick={() => {
          dispatch(postSavings(newSavings));
          setNewSavings({
            amount: "",
            description: "",
          });
        }}
      >
        Submit
      </Button>
    </div>
  );
}
