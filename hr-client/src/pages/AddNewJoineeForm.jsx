import { Card, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const AddNewJoineeForm = () => {
  return (
    <Container>
      <Form>
        <Card className="my-5">
          <Card.Body>
            <Form.Control type="text" placeholder="Enter employee id" className="my-3" />
            <Form.Control type="text" placeholder="Enter employee name" className="my-3"/>
            <Form.Control type="email" placeholder="Enter employee email" className="my-3"/>
            <Form.Control
              type="number"
              placeholder="Enter emplyee phone number" className="my-3"
            />
            <Form.Control type="text" placeholder="Enter employee hometown" className="my-3" />
            <Form.Control
              type="number"
              placeholder="Enter emloyee experience"
              className="my-3"
            />
            <Form.Control
              type="text"
              placeholder="What would you become if I was not this"
              className="my-3"
            />
            <Form.Control type="text" placeholder="Your favourite quote" className="my-3" />

            <Link to="/deck" className="btn btn-primary">View The deck</Link>
          </Card.Body>
        </Card>
      </Form>
    </Container>
  );
};

export default AddNewJoineeForm;
