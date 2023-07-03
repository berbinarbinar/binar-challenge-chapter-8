import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../style/homepage.css';

function EditPlayer() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] =useState('');
  const [submittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const submittedData = { email, username,password };
    alert(`Submitted Data:\nEmail: ${submittedData.email}\nUsername: ${submittedData.username}\nPassword:${submittedData.password}`);
  };
  
  return (
    <div className="background">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail" className="form"> 
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group><br />

        <Form.Group controlId="formBasicUsername" className="form">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group><br />
        <Form.Group controlId="formBasicPassword" className="form">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group><br />

        <Form.Group controlId="formBasicCheckbox" className="form">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Edit
        </Button>
        <a href="/" className="btn btn-secondary my-1 mx-2">Back</a>
      </Form>

      {submittedData && (
        <div>
          <h2>Submitted Data:</h2>
          <p>Email: {submittedData.email}</p>
          <p>Username: {submittedData.username}</p>
          <p>Password: {submittedData.password}</p>
        </div>
      )}
    </div>
  );
}

export default EditPlayer;
