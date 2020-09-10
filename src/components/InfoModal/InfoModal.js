import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const InfoModal = (props) => {
  //state to take user name input
  const [name, setName] = useState("mohiuddin");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      //if value empty show alert
      alert("Name field should not be empty");
    } else {
      const consoleInfo = { name: name, location: props.lanlatInfo };
      console.log(consoleInfo);
    }
  };
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Body>
        <Form>
          <Form.Control
            type="text"
            placeholder={`${props.lanlatInfo.lat} / ${props.lanlatInfo.lon}`}
            disabled
          />
          <Form.Control
            type="text"
            placeholder="mohiuddin"
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
