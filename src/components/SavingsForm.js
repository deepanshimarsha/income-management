import Button from "react-bootstrap/Button";

export default function SavingsForm() {
  return (
    <div className="form">
      <div>
        <input type="number" placeholder="Enter Amount" />
      </div>
      <div>
        <input type="text" placeholder="Enter Description" />
      </div>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </div>
  );
}
