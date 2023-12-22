import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Form, ListGroup, Row } from "react-bootstrap";
import Deck from "./Deck";

const ListNewJoinee = () => {
  const [newJoinees, setNewJoinnes] = useState([]);
  const [newJoineeId, setNewJoineeId] = useState(-1);
  const [varient, setVarient] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8081/newjoinee/")
      .then((response) => setNewJoinnes(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleChange = (event) => {
    console.log(event.target.value);
    setVarient(parseInt(event.target.value, 10));
  };
  return (
    <Row className="h-100">
      <Col md={3}>
        <ListGroup as="ol">
          {newJoinees.map((newJoinee) => (
            <ListGroup.Item
              key={newJoinee.empId}
              as="li"
              className="text-center fw-bold m-2 bg-light text-secondary"
              onClick={() => setNewJoineeId(parseInt(newJoinee.empId))}
            >
              Employee Id:{newJoinee.empId} <br />
              Employee Name: {newJoinee.empName}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
      <Col md={9}>
        <Card>
          <Card.Body>
            <Form.Select aria-label="select varient" onChange={handleChange}>
              <option value="0">select the theme</option>
              <option value="1">varient 1</option>
              <option value="2">varient 2</option>
              <option value="3">varient 3</option>
            </Form.Select>
            <Deck newJoineeId={newJoineeId} varient={varient} />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ListNewJoinee;
