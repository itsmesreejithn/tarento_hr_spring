import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";
import { Button, Container } from "react-bootstrap";
import Template1 from "./templates/Template1";
import Template2 from "./templates/Template2";
import Template3 from "./templates/Template3";

const Deck = ({ newJoineeId, varient }) => {
  const [newJoinee, setNewJoinee] = useState({});

  useEffect(() => {
    if (newJoineeId < 0) {
      console.log("id less than 0");
    } else {
      axios
        .get(`http://localhost:8081/newjoinee/${newJoineeId}`)
        .then((response) => {
          // console.log(response);
          setNewJoinee(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [newJoineeId, varient]);

  if (newJoineeId < 1) {
    return <>No Employee selected</>;
  } else {
    if (varient == 1) {
      return (
        <Container id="temp" fluid className="mt-2">
          <Template1 newJoinee={newJoinee} />
        </Container>
      );
    } else if (varient == 2) {
      return (
        <Container id="temp" fluid className="mt-2">
          <Template2 newJoinee={newJoinee} />
        </Container>
      );
    } else {
      return (
        <Container id="temp" fluid className="mt-2">
          <Template3 newJoinee={newJoinee} />
        </Container>
      );
    }
  }
};

export default Deck;
