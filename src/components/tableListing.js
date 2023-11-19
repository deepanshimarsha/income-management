import { useDispatch } from "react-redux";
//import EditModalForm from "./EditModalForm";
import { Button } from "react-bootstrap";
import { deleteIncome } from "../features/income/incomeSlice";
import EditModalForm from "./EditModalForm";
export default function TableListing({
  income,
  expense,
  savings,
  loading,
  error,
}) {
  const dispatch = useDispatch();

  const handleDelete = (itemId) => {};
  return (
    <table>
      <tr>
        <th>Description</th>
        <th>Amount</th>
        <th>Category</th>
        <th>Actions</th>
      </tr>
      {!error && loading && <p>laoding...</p>}
      {!loading && error && <p>{error}</p>}

      {income &&
        !loading &&
        !error &&
        income.map((item) => {
          return (
            <tbody key={item._id}>
              <tr>
                <td>{item.description}</td>
                <td> Rs.{item.amount}</td>
                <td>{item.category}</td>
                <td className="actionBtn">
                  <EditModalForm incomeItem={item} />

                  <Button
                    variant="danger"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(deleteIncome(item._id));
                    }}
                  >
                    delete
                  </Button>
                </td>
              </tr>
            </tbody>
          );
        })}

      {expense &&
        !loading &&
        !error &&
        expense.map((item) => {
          return (
            <tr>
              <td>{item.name}</td>
              <td> {item.quantity}</td>
              <td>Rs.{item.price}</td>
              <td className="actionBtn">
                {/* <EditModalForm inventoryItem={item} /> */}
                <Button variant="danger" onClick={() => handleDelete(item._id)}>
                  delete
                </Button>
              </td>
            </tr>
          );
        })}

      {savings &&
        !loading &&
        !error &&
        savings.map((item) => {
          return (
            <tr>
              <td>{item.name}</td>
              <td> {item.quantity}</td>
              <td>Rs.{item.price}</td>
              <td className="actionBtn">
                {/* <EditModalForm salesItem={item} /> */}
                <Button variant="danger" onClick={() => handleDelete(item._id)}>
                  delete
                </Button>
              </td>
            </tr>
          );
        })}
    </table>
  );
}
