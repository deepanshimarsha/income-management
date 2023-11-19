import Button from "react-bootstrap/Button";

export default function ExpenseForm() {
  return (
    <div className="form">
      <div>
        <input type="number" placeholder="Enter Amount" />
      </div>
      <div>
        <input type="text" placeholder="Enter Description" />
      </div>
      <div>
        <select>
          <option disabled selected>
            select category
          </option>

          <option>Insurance</option>
          <option>Rent</option>
          <option>Taxes</option>
          <option>Electricity</option>
          <option>Interest</option>
          <option>Transportation</option>
          <option>Travel</option>
          <option>Groceries</option>
          <option>Clothes</option>
          <option>Home Appliances</option>
          <option>Other</option>
        </select>
      </div>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </div>
  );
}
