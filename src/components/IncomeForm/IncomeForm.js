import { useState } from "react";
import Button from "react-bootstrap/Button";
import { postIncome } from "../../features/income/incomeSlice";
import { useDispatch } from "react-redux";

export default function IncomeForm() {
  const [newIncome, setNewIncome] = useState({
    amount: "",
    description: "",
    category: "",
  });

  const dispatch = useDispatch();
  return (
    <div className="form">
      <div>
        <input
          value={newIncome.amount}
          type="number"
          placeholder="Enter Amount"
          onChange={(e) => {
            setNewIncome((prev) => ({ ...prev, amount: e.target.value }));
          }}
        />
      </div>
      <div>
        <input
          value={newIncome.description}
          type="text"
          placeholder="Enter Description"
          onChange={(e) => {
            setNewIncome((prev) => ({ ...prev, description: e.target.value }));
          }}
        />
      </div>
      <div>
        <select
          value={newIncome.category}
          onChange={(e) => {
            setNewIncome((prev) => ({ ...prev, category: e.target.value }));
          }}
        >
          <option defaultValue={true}>select category</option>
          <option value="Active">Active</option>
          <option value="Passive">Passive</option>
          <option value="Investment">Investment</option>
        </select>
      </div>

      <Button
        variant="primary"
        type="submit"
        onClick={() => {
          dispatch(postIncome(newIncome));
          setNewIncome({
            amount: "",
            description: "",
            category: "",
          });
        }}
      >
        Submit
      </Button>
    </div>
  );
}
