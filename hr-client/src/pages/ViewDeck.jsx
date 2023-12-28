import { Container } from "react-bootstrap";
import ListNewJoinee from "../components/ListNewJoinee";
import Header from "../components/Header";

const ViewDeck = () => {
  return (
    <>
      <Header />
      <Container fluid className="py-5 h-100 bg-black bg-gradient">
        <ListNewJoinee />
      </Container>
    </>
  );
};

export default ViewDeck;
