import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { updateIncome } from "../features/income/incomeSlice";
import { updateExpense } from "../features/expense/expenseSlice";
import { updateSavings } from "../features/savings/savingsSlice";

const EditModalForm = ({ incomeItem, expenseItem, savingsItem }) => {
  const [show, setShow] = useState(false);
  const item = incomeItem
    ? incomeItem
    : expenseItem
    ? expenseItem
    : savingsItem;
  const [editItem, setEditItem] = useState(item);
  const dispatch = useDispatch();
  const handleClose = () => {
    setEditItem(item);
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (incomeItem) {
      dispatch(
        updateIncome({
          incomeId: incomeItem._id,
          updatedFields: {
            amount: editItem.amount,
            description: editItem.description,
            category: editItem.category,
          },
        })
      );
    } else if (expenseItem) {
      dispatch(
        updateExpense({
          expenseId: expenseItem._id,
          updatedFields: {
            amount: editItem.amount,
            description: editItem.description,
            category: editItem.category,
          },
        })
      );
    } else {
      dispatch(
        updateSavings({
          savingsId: savingsItem._id,
          updatedFields: {
            amount: editItem.amount,
            description: editItem.description,
          },
        })
      );
    }

    handleClose();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {incomeItem && (
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  value={editItem.description}
                  onChange={(e) =>
                    setEditItem((editItem) => ({
                      ...editItem,
                      description: e.target.value,
                    }))
                  }
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="number"
                  value={editItem.amount}
                  onChange={(e) =>
                    setEditItem((editItem) => ({
                      ...editItem,
                      amount: e.target.value,
                    }))
                  }
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Category</Form.Label>
                <Form.Select
                  value={editItem.category}
                  onChange={(e) =>
                    setEditItem((editItem) => ({
                      ...editItem,
                      category: e.target.value,
                    }))
                  }
                  aria-label="select category"
                >
                  <option value="Active">Active</option>
                  <option value="Passive">Passive</option>
                  <option value="Investment">Investment</option>
                </Form.Select>
              </Form.Group>
            </Form>
          )}
          {expenseItem && (
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  value={editItem.description}
                  onChange={(e) =>
                    setEditItem((editItem) => ({
                      ...editItem,
                      description: e.target.value,
                    }))
                  }
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="number"
                  value={editItem.amount}
                  onChange={(e) =>
                    setEditItem((editItem) => ({
                      ...editItem,
                      amount: e.target.value,
                    }))
                  }
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Category</Form.Label>
                <Form.Select
                  value={editItem.category}
                  onChange={(e) =>
                    setEditItem((editItem) => ({
                      ...editItem,
                      category: e.target.value,
                    }))
                  }
                  aria-label="select category"
                >
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
                </Form.Select>
              </Form.Group>
            </Form>
          )}
          {savingsItem && (
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  value={editItem.description}
                  onChange={(e) =>
                    setEditItem((editItem) => ({
                      ...editItem,
                      description: e.target.value,
                    }))
                  }
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Amount</Form.Label>

                <Form.Control
                  type="number"
                  value={editItem.amount}
                  onChange={(e) =>
                    setEditItem((editItem) => ({
                      ...editItem,
                      amount: e.target.value,
                    }))
                  }
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => handleSubmit(e)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditModalForm;
