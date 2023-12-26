import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import Header from "../components/Header";

const AddNewJoineeForm = () => {
  const [roles, setRoles] = useState([]);
  const [ibus, setIbu] = useState([]);
  const [manager, setManager] = useState("");

  const [empId, setEmpId] = useState(null);
  const [empName, setEmpName] = useState("");
  const [empEmail, setEmpEmail] = useState("");
  const [empPhone, setEmpPhone] = useState(null);
  const [empHometown, setEmpHometown] = useState("");
  const [empExperience, setEmpExperice] = useState(null);
  const [empWwib, setEmpWwib] = useState("");
  const [empQuote, setEmpQuote] = useState("");
  const [empRole, setEmpRole] = useState(null);
  const [empIbu, setEmpIbu] = useState(null);
  const [empHobbies, setEmpHobbies] = useState("");
  const [empCoreSkills, setEmpCoreSkills] = useState("");

  const handleEmpIdChange = (e) => {
    setEmpId(parseInt(e.target.value, 10));
  };
  const handleEmpNameChange = (e) => {
    setEmpName(e.target.value);
  };
  const handleEmpEmaliChange = (e) => {
    setEmpEmail(e.target.value);
  };
  const handleEmpExperinceChange = (e) => {
    setEmpExperice(parseInt(e.target.value, 10));
  };
  const handleEmpHometownChange = (e) => {
    setEmpHometown(e.target.value);
  };
  const handleEmpWwibChange = (e) => {
    setEmpWwib(e.target.value);
  };
  const handleEmpQuoteChange = (e) => {
    setEmpQuote(e.target.value);
  };
  const handleEmpRoleChange = (e) => {
    setEmpRole(parseInt(e.target.value, 10));
  };
  const handleEmpPhoneChange = (e) => {
    setEmpPhone(parseInt(e.target.value, 10));
  };
  const handleEmpHobbiesChange = (e) => {
    setEmpHobbies(e.target.value);
  };
  const handleEmpCoreSkillsChange = (e) => {
    setEmpCoreSkills(e.target.value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8081/roles/")
      .then((response) => {
        setRoles(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("http://localhost:8081/ibus/")
      .then((response) => {
        setIbu(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const selectMangerChange = (event) => {
    const selectedIbuId = event.target.value;
    setEmpIbu(parseInt(selectedIbuId, 10));
    const selectedIbuManager = ibus.find((ibu) => ibu.ibuId == selectedIbuId);
    if (selectedIbuManager) {
      setManager(selectedIbuManager.ibuManager);
    } else {
      setManager("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      empId,
      empName,
      empEmail,
      empHome: empHometown,
      empExperience,
      empPhone,
      empQuote,
      empWwib,
      empHobbies,
      empCoreSkills,
      ibu: { ibuId: empIbu },
      role: { roleId: empRole },
    };

    console.log(formData);

    axios
      .post("http://localhost:8081/newjoinee/post", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        alert("Data submited successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Please insert data to be inserted");
      });
  };

  return (
    <>
      <Header />
      <Container>
        <h1 className="text-center mt-2">Tell about yourself</h1>
        <Form onSubmit={handleSubmit}>
          <Card className="my-5">
            <Card.Body>
              <Form.Control
                type="number"
                placeholder="Enter employee id"
                className="my-3"
                onChange={handleEmpIdChange}
              />
              <Form.Control
                type="text"
                placeholder="Enter employee name"
                className="my-3"
                onChange={handleEmpNameChange}
              />
              <Form.Control
                type="email"
                placeholder="Enter employee email"
                className="my-3"
                onChange={handleEmpEmaliChange}
              />
              <Form.Control
                type="number"
                placeholder="Enter emplyee phone number"
                className="my-3"
                onChange={handleEmpPhoneChange}
              />
              <Form.Control
                type="text"
                placeholder="Enter employee hometown"
                className="my-3"
                onChange={handleEmpHometownChange}
              />
              <Form.Control
                type="number"
                placeholder="Enter emloyee experience"
                className="my-3"
                onChange={handleEmpExperinceChange}
              />
              <Form.Control
                type="text"
                placeholder="What would you become if I was not this"
                className="my-3"
                onChange={handleEmpWwibChange}
              />
              <Form.Control
                type="text"
                placeholder="Hobbies"
                className="my-3"
                onChange={handleEmpHobbiesChange}
              />
              <Form.Control
                type="text"
                placeholder="Your favourite quote"
                className="my-3"
                onChange={handleEmpQuoteChange}
              />
              <Form.Control
                type="text"
                placeholder="Core Skills"
                className="my-3"
                onChange={handleEmpCoreSkillsChange}
              />
              <Form.Select
                aria-label="roleSelect"
                className="my-3"
                onChange={handleEmpRoleChange}
              >
                <option value={-1}>Please select the role</option>
                {roles.map((role, index) => (
                  <option key={index} value={role.roleId}>
                    {role.roleName}
                  </option>
                ))}
              </Form.Select>
              <Form.Select
                aria-label="ibuSelector"
                className="my-3"
                onChange={selectMangerChange}
              >
                <option value={-1}>Please select the Ibu</option>
                {ibus.map((ibu, index) => (
                  <option key={index} value={ibu.ibuId}>
                    {ibu.ibuName}
                  </option>
                ))}
              </Form.Select>
              <Form.Control
                type="text"
                placeholder="Manager"
                value={manager}
                readOnly
                className="my-3"
              />
              <Button
                variant="outline-primary"
                type="submit"
                className="mx-auto"
              >
                Submit
              </Button>
            </Card.Body>
          </Card>
        </Form>
      </Container>
    </>
  );
};

export default AddNewJoineeForm;
