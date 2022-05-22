import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

function UserForm(props) {
  const [id, setID] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("");
  const [lvl, setLvl] = useState("");

  useEffect(() => {
    if (props.userData) {
      setID(props.userData.id);
      setUsername(props.userData.username);
      setEmail(props.userData.email);
      setExperience(props.userData.experience);
      setLvl(props.userData.lvl);
    }
    if (props.methodFunction === "Add") {
      setID("");
      setUsername("");
      setEmail("");
      setExperience("");
      setLvl("");
    }
  }, [props.userData, props.methodFunction]);

  const usernameOnChangeHandle = (event) => {
    setUsername(event.target.value);
  };
  const emailOnChangeHandle = (event) => {
    setEmail(event.target.value);
  };
  const passwordOnChangeHandle = (event) => {
    setPassword(event.target.value);
  };
  const experienceOnChangeHandle = (event) => {
    setExperience(event.target.value);
  };
  const levelOnChangeHandle = (event) => {
    setLvl(event.target.value);
  };
  const onSubmit = (event) => {
    const data = {
      id: id,
      username: username,
      email: email,
      password: password,
      experience: experience,
      lvl: lvl,
    };
    if (props.methodFunction === "Add") {
      props.onAddUser(data);
    }
    if (props.methodFunction === "Edit") {
      props.onEditUser(data);
    }
    props.handleClose();
  };

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.methodFunction} User Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="userForm" onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={usernameOnChangeHandle}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={emailOnChangeHandle}
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={passwordOnChangeHandle}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formExperience">
              <Form.Label>Experience</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter experience"
                value={experience}
                onChange={experienceOnChangeHandle}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLevel">
              <Form.Label>Level</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter level"
                value={lvl}
                onChange={levelOnChangeHandle}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" form="userForm">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserForm;
