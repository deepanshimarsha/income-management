import Button from "react-bootstrap/Button";
import { useState } from "react";
import { postExpense } from "../features/expense/expenseSlice";
import { useDispatch } from "react-redux";
export default function ExpenseForm() {
  const [newExpense, setNewExpense] = useState({
    amount: "",
    description: "",
    category: "",
  });

  const dispatch = useDispatch();
  return (
    <div className="form">
      <div>
        <input
          value={newExpense.amount}
          type="number"
          placeholder="Enter Amount"
          onChange={(e) => {
            setNewExpense((prev) => ({ ...prev, amount: e.target.value }));
          }}
        />
      </div>
      <div>
        <input
          value={newExpense.description}
          type="text"
          placeholder="Enter Description"
          onChange={(e) => {
            setNewExpense((prev) => ({ ...prev, description: e.target.value }));
          }}
        />
      </div>
      <div>
        <select
          value={newExpense.category}
          onChange={(e) => {
            setNewExpense((prev) => ({ ...prev, category: e.target.value }));
          }}
        >
          <option defaultValue={true}>select category</option>

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

      <Button
        variant="primary"
        type="submit"
        onClick={() => {
          dispatch(postExpense(newExpense));
          setNewExpense({
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
