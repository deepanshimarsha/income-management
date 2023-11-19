import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { updateIncome } from "../features/income/incomeSlice";

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
              <Form.Control
                type="text"
                value={editItem.category}
                onChange={(e) =>
                  setEditItem((editItem) => ({
                    ...editItem,
                    category: e.target.value,
                  }))
                }
              />
            </Form.Group>
          </Form>
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
