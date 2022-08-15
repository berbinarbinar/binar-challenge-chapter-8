import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function EditPlayer() {
  //state
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  //state validation
  const [validation, setValidation] = useState({});

  const navigate = useNavigate();

  //get ID from parameter URL
  const { id } = useParams();

  //hook useEffect
  useEffect(() => {
    //panggil function "getPlayerById"
    getPlayerById();
  }, []);

  //function "getPostById"
  const getPlayerById = async () => {
    //get data from server
    const response = await axios.get(
      `http://localhost:4000/api/v1/players/${id}`
    );
    //get response data
    const data = await response.data.data;

    //assign data to state
    setUsername(data.username);
    setEmail(data.email);
  };

  //function "updatePlayer"
  const updatePlayer = async (e) => {
    e.preventDefault();

    //send data to server
    await axios
      .put(`http://localhost:4000/api/v1/players/${id}`, {
        username: username,
        email: email,
      })
      .then(() => {
        //redirect
        navigate("/");
      })
      .catch((error) => {
        //assign validation on state
        setValidation(error.response.data);
      });
  };

  return (
    <div className="mt-3">
      <div className="container">
        <form className="row mt-3 d-flex w-100" onSubmit={updatePlayer}>
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
          <button className="btn btn-primary form-control" type="submit">
            Edit Player
          </button>
        </form>

        {validation.errors && (
          <div className="row mt-3">
            <div className="col d-flex">
              <ul class="mt-0 mb-0">
                {validation.errors.map((error, index) => (
                  <li key={index}>{`${error.param} : ${error.msg}`}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className="row mt-3 w-100">
          <div className="col d-flex justify-content-end">
            <Link to="/">
              <button type="button" className="btn btn-success">
                Back to Dashboard
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
