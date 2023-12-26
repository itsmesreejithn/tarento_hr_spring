import React, { useState } from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName == "hr" && password == "hr") {
      navigate("/deck");
    } else {
      alert("Wrong credentials");
    }
  };
  return (
    <>
      <Header />
      <Container>
        <Card className="mt-5 col-5 mx-auto p-5">
          <Card.Body>
            <Card.Title>HR Login</Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Row>
                <Button
                  variant="outline-primary"
                  type="submit"
                  className="mx-auto"
                >
                  Login
                </Button>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default LoginPage;
