import axios from "axios";
import React, { useEffect } from "react";

const ViewDeck = () => {
  useEffect(() => {
    axios.get("http://localhost:8081/newjoinee/").then((response) => {
      console.log(response.data[0]);
    });
  });
  return <div>ViewDeck</div>;
};

export default ViewDeck;
