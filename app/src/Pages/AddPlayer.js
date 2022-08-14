import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AddPlayer() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/players",
        JSON.stringify({ username, email, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status == 201) {
        setMessage("User created successfully");
      } else {
        setMessage("Error occured");
      }

      //clear state and controlled inputs
      setUsername("");
      setPassword("");
      setEmail("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <form className="row mt-3 d-flex w-100" onSubmit={handleSubmit}>
        <div className="col form-group">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}></input>
        </div>
        <div className="col form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div className="col form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <button className="btn btn-primary form-control" type="submit">
          Add Player
        </button>
      </form>

      <div className="row mt-3 w-100">
        <div className="col d-flex justify-content-end">
          <Link to="/">
            <button type="button" className="btn btn-success">
              Back to Dashboard
            </button>
          </Link>
        </div>
      </div>
      <div className="message">{message ? <p>{message}</p> : null}</div>
    </div>
  );
}
