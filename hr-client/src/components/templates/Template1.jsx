import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col, Image } from "react-bootstrap";

const Template1 = ({ newJoinee }) => {
  const [src, setSrc] = useState("");
  useEffect(() => {
    axios
      .get(
        `http://localhost:8081/newjoinee/images/download/${newJoinee.empId}`,
        {
          responseType: "blob",
        }
      )
      .then((response) => {
        let imageUrl = URL.createObjectURL(response.data);
        setSrc(imageUrl);
        console.log(response.data);
      })
      .catch((error) => {
        setSrc("");
        console.error(error);
      });
  }, [newJoinee.empId]);
  return (
    <Row className="varient1">
      <Row>
        <Col>
          <p className="rounded-pill m-1 p-5 bg-light text-center">Home Town</p>
          <p className="m-1 px-5 text-center">{newJoinee.empHome}</p>
        </Col>
        <Col>
          <p className="rounded-pill m-1 p-5 bg-light text-center">
            Experience
          </p>
          <p className="m-1 px-5 text-center">
            {newJoinee.empExperience} years
          </p>
        </Col>

        <Col>
          <p className="rounded-pill m-1 p-5 bg-light text-center">
            In my free time I enjoy
          </p>
          <p className="m-1 px-5 text-center">{newJoinee.empHobbies}</p>
        </Col>
        <Col>
          <p className="rounded-pill m-1 p-5 bg-light text-center">
            If it wasn't in my current profession, I would have been
          </p>
          <p className="m-1 px-5 text-center">{newJoinee.empWwib}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row className="rounded-pill m-1 p-5 bg-light text-center">
            <Col>
              <Image
                src={src}
                alt={newJoinee.empName}
                roundedCircle
                width="50%"
              />
              <p>{newJoinee.empName}</p>
              <p>{newJoinee.role && newJoinee.role.roleName}</p>
            </Col>
            <Col>
              <p>Manager: {newJoinee.ibu && newJoinee.ibu.ibuManager}</p>
              <p>IBU: {newJoinee.ibu && newJoinee.ibu.ibuName}</p>
              <p>Core Skills: {newJoinee.empCoreSkills}</p>
            </Col>
          </Row>
        </Col>
        <Col>
          <p className="rounded-pill m-1 p-5 bg-light text-center">
            I can be reached at
          </p>
          <p className="m-1 px-5 text-center">{newJoinee.empEmail}</p>
          <p className="m-1 px-5 text-center">{newJoinee.empPhone}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="m-1 p-5 text-center rounded-pill bg-light">
            The Quote that fuels me
          </p>
          <p className="m-1 px-5 text-center">{newJoinee.empQuote}</p>
        </Col>
      </Row>
    </Row>
  );
};

export default Template1;
