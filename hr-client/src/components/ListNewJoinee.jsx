import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Form, ListGroup, Row, Button } from "react-bootstrap";
import Deck from "./Deck";
import "../App.css";
import html2canvas from "html2canvas";
import downloadjs from "downloadjs";

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
    setVarient(event.target.value);
  };

  const [hoveredItemId, setHoveredItemId] = useState(null);

  const handleDownload = async () => {
    const canvas = await html2canvas(document.getElementById("temp"));
    const dataURL = canvas.toDataURL("image/png");
    downloadjs(dataURL, `${newJoineeId}`, "image/png");
  };

  return (
    <Row className="h-100">
      <Col md={3} className="bg-dark bg-gradient">
        <h1 className="text-center text-white mt-2">Employees</h1>
        <div
          style={{
            height: "650px",
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <ListGroup as="ol">
            {newJoinees.map((newJoinee) => (
              <ListGroup.Item
                key={newJoinee.empId}
                as="li"
                className={`text-center fw-bold m-2 bg-light text-secondary rounded ${
                  hoveredItemId === newJoinee.empId ? "hovered" : ""
                }`}
                onMouseOver={() => setHoveredItemId(newJoinee.empId)}
                onMouseOut={() => setHoveredItemId(null)}
                onClick={() => setNewJoineeId(parseInt(newJoinee.empId))}
              >
                Employee Id:{newJoinee.empId} <br />
                Employee Name: {newJoinee.empName}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <Button variant="outline-primary" onClick={handleDownload}>
          Download Deck
        </Button>
      </Col>
      <Col md={9}>
        <Card>
          <Card.Body>
            <Form.Select aria-label="select varient" onChange={handleChange}>
              <option value="0">Select a theme</option>
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
