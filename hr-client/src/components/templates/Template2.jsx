import React from "react";
import { Row, Col } from "react-bootstrap";

const Template2 = ({ newJoinee }) => {
  return (
    <Row className="varient2 fst-italic">
      <Row>
        <Col className="rounded-pill m-1 p-5 bg-black bg-gradient border border-white text-center">
          <p className="fs-2 fw-bolder">{newJoinee.empName}</p>
          <p>{newJoinee.role && newJoinee.role.roleName}</p>
        </Col>
      </Row>
      <Row>
        <Col className="rounded-pill m-1 p-5 bg-black bg-gradient border border-white text-center">
          <div className="my-5 fs-1">
            <p>Manager: {newJoinee.ibu && newJoinee.ibu.ibuManager}</p>
            <p>IBU: {newJoinee.ibu && newJoinee.ibu.ibuName}</p>
            <p>Core Skills: {newJoinee.empCoreSkills}</p>
          </div>
        </Col>
        <Col className="m-1 p-5 text-center">
          <Row>
            <Col>
              <p className="rounded-pill m-1 p-5 bg-black bg-gradient border border-white text-center">
                Home Town
              </p>
              <p className="m-1 px-5 text-center">{newJoinee.empHome}</p>
            </Col>
            <Col>
              <p className="rounded-pill m-1 p-5 bg-black bg-gradient border border-white text-center">
                Experience
              </p>
              <p className="m-1 px-5 text-center">
                {newJoinee.empExperience} years
              </p>
            </Col>

            <Col>
              <p className="rounded-pill m-1 p-5 bg-black bg-gradient border border-white text-center">
                In my free time I enjoy
              </p>
              <p className="m-1 px-5 text-center">{newJoinee.empHobbies}</p>
            </Col>
            <Col>
              <p className="rounded-pill m-1 p-5 bg-black bg-gradient border border-white text-center">
                If it wasn't in my current profession, I would have been
              </p>
              <p className="m-1 px-5 text-center">{newJoinee.empWwib}</p>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col className="rounded-pill m-1 p-5 bg-black  bg-gradient border border-white text-center">
          <p className="fs-2">I can be reached at</p>
          <p className="m-1 px-5 text-center">{newJoinee.empEmail}</p>
          <p className="m-1 px-5 text-center">{newJoinee.empPhone}</p>
        </Col>
      </Row>
      <Row>
        <Col className="rounded-pill m-1 p-5 bg-black  bg-gradient border border-white text-center">
          <p className="m-1 p-5 text-center">The Quote that fuels me</p>
          <p className="m-1 px-5 text-center">{newJoinee.empQuote}</p>
        </Col>
      </Row>
    </Row>
  );
};

export default Template2;
