import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Deck = ({ newJoineeId, varient }) => {
  const [newJoinee, setNewJoinee] = useState({});
  const [homeTownStyle, setHomeTownStyle] = useState("");
  const [namePostStyle, setNamePostStyle] = useState("");
  const [managerSkillIbuSyle, setManagerSkillIbuStyle] = useState("");
  const [experienceStyle, setExperienceStyle] = useState("");
  const [hobbiesStyle, setHobbiesStyle] = useState("");
  const [contactStyle, setContactStyle] = useState("");
  const [quoteStyle, setQuoteStyle] = useState("");
  const [wwibStyle, setWwibStyle] = useState("");
  const [rowStyle, setRowStyle] = useState(
    "row justify-content-center text-center fw-bold  fs-5 text-white"
  );
  useEffect(() => {
    if (newJoineeId < 0) {
      console.log("id less than 0");
    } else {
      axios
        .get(`http://localhost:8081/newjoinee/${newJoineeId}`)
        .then((response) => {
          console.log(response);
          setNewJoinee(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
      if (varient == 1) {
        setRowStyle(
          "row justify-content-center text-center fw-bold fs-5 bg-info bg-gradient"
        );
        setHomeTownStyle("bg-primary-subtle rounded col-md-4 my-2 mx-1 w-25");
        setNamePostStyle("bg-primary-subtle rounded col-md-2 my-2 mx-1");
        setManagerSkillIbuStyle(
          "bg-primary-subtle rounded col-md-10 my-2 mx-1 w-75"
        );
        setExperienceStyle("bg-primary-subtle rounded col-md-4 py-2 my-2 mx-1");
        setHobbiesStyle("bg-primary-subtle rounded col-md-4 py-2 my-2 mx-1");
        setContactStyle("bg-primary-subtle rounded col-md-4 my-2 mx-1");
        setQuoteStyle("bg-primary-subtle rounded col-md-4 my-2 mx-1");
        setWwibStyle("bg-primary-subtle rounded col-md-4 my-2 mx-1 w-25");
      } else if (varient == 2) {
        setRowStyle(
          "row justify-content-center text-center fw-bold fs-5 bg-success-subtle text-white"
        );
        setHomeTownStyle("bg-success bg-opacity-50 rounded col-md-6 my-2 mx-1");
        setNamePostStyle("bg-success bg-opacity-50 rounded col-md-6 my-2 mx-1");
        setManagerSkillIbuStyle(
          "bg-success bg-opacity-50 rounded col-md-6 my-2 mx-1"
        );
        setExperienceStyle(
          "bg-success bg-opacity-50 rounded col-md-6 my-2 mx-1"
        );
        setHobbiesStyle("bg-success bg-opacity-50 rounded col-md-6 my-2 mx-1");
        setContactStyle("bg-success bg-opacity-50 rounded col-md-4 my-2 mx-1");
        setQuoteStyle("bg-success bg-opacity-50 rounded col-md-4 my-2 mx-1");
        setWwibStyle("bg-success bg-opacity-50 rounded col-md-4 my-2 mx-1");
      } else {
        setRowStyle(
          "row justify-content-center text-center fw-bold fs-5 bg-black bg-gradient"
        );
        setHomeTownStyle("bg-dark-subtle rounded col-md-3 my-2 mx-1");
        setNamePostStyle("bg-dark-subtle rounded col-md-6 my-2 mx-1");
        setManagerSkillIbuStyle("bg-dark-subtle rounded col-md-6 my-2 mx-1");
        setExperienceStyle("bg-dark-subtle rounded col-md-3 my-2 mx-1");
        setHobbiesStyle("bg-dark-subtle rounded col-md-6 my-2 mx-1");
        setContactStyle("bg-dark-subtle rounded col-md-4 my-2 mx-1");
        setQuoteStyle("bg-dark-subtle rounded col-md-4 my-2 mx-1");
        setWwibStyle("bg-dark-subtle rounded col-md-4 my-2 mx-1");
      }
    }
  }, [newJoineeId, varient]);

  return (
    <>
      {newJoineeId < 0 ? (
        <>no empoyee selected</>
      ) : (
        <Container className="mt-2">
          <div className={rowStyle}>
            <div className={homeTownStyle}>
              Hometown
              <br />
              {newJoinee.empHome}
            </div>
            <div className={experienceStyle}>
              Experience
              <br />
              {newJoinee.empExperience} years
            </div>
            <div className={hobbiesStyle}>
              What do you do in free time <br />
              {newJoinee.empHobbies}
            </div>
          </div>

          <div className={rowStyle}>
            <div className={contactStyle}>
              You can contact me in <br />
              Email: {newJoinee.empEmail}
              <br />
              Phone: {newJoinee.empPhone}
            </div>
            <div className={wwibStyle}>
              What would I become if I was not here <br />
              {newJoinee.empWwib}
            </div>
            <div className={quoteStyle}>
              Your favourite Quote <br />
              {newJoinee.empQuote}
            </div>
          </div>

          <div className={rowStyle}>
            <div className={namePostStyle}>
              {newJoinee.empName}
              <br />
              {newJoinee.role && newJoinee.role.roleName}
            </div>

            <div className={managerSkillIbuSyle}>
              Core Skills:
              {newJoinee.empCoreSkills}
              <br />
              IBU:
              {newJoinee.ibu && newJoinee.ibu.ibuName}
              <br />
              Manager:
              {newJoinee.ibu && newJoinee.ibu.ibuManager}
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default Deck;
