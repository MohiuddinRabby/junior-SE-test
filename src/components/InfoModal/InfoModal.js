import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const InfoModal = (props) => {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Body>
        <Form>
          <Form.Control
            type="text"
            placeholder={`${props.lanlatInfo.lan} / ${props.lanlatInfo.lat}`}
            disabled
          />
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <Button onClick={handleSubmit} size="sm">
            Send data to console
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InfoModal;
