import { useEffect, useState } from "react";

export default function Dashboard() {
  const [players, setPlayers] = useState([]);
  const [filters, setFilters] = useState({
    username: "",
    email: "",
    experience: "",
    lvl: "",
  });

  const fetchPlayers = async () => {
    const queryString = Object.keys(filters)
      .map((key) => key + "=" + filters[key])
      .join("&");
    const response = await fetch(
      `http://localhost:4000/api/v1/players?${queryString}`
    );
    const responseJson = await response.json();
    setPlayers(responseJson.data);
  };
  useEffect(() => {
    fetchPlayers();
  }, []);

  const onFilterChange = (e) => {
    const newFilters = { ...filters, [e.target.name]: e.target.value };
    setFilters(newFilters);
  };

  const applyFilters = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <form className="d-flex w-100" onSubmit={applyFilters}>
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
              onChange={onFilterChange}></input>
          </div>
          <div className="col form-group">
            <div className="col form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                name="email"
                onChange={onFilterChange}></input>
            </div>
          </div>
          <div className="col form-group">
            <div className="col form-group">
              <label htmlFor="experience" className="form-label">
                Experience
              </label>
              <input
                type="experience"
                className="form-control"
                id="experience"
                placeholder="1000"
                name="experience"
                onChange={onFilterChange}></input>
            </div>
          </div>
          <div className="col form-group">
            <div className="col form-group">
              <label htmlFor="level" className="form-label">
                Level
              </label>
              <input
                type="level"
                className="form-control"
                id="level"
                placeholder="1"
                name="level"
                onChange={onFilterChange}></input>
            </div>
          </div>
          <div className="col form-group d-flex align-items-end">
            <button type="submit" className="btn btn-dark">
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="row mt-3">
        <div className="col d-flex justify-content-end">
          <button type="button" className="btn btn-success">
            Add player
          </button>
        </div>
      </div>

      <div className="row mt-4">
        <table class="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Experience</th>
              <th scope="col">Level</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {players.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.experience}</td>
                  <td>{item.lvl}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
