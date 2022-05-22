import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import UserTable from "./components/UserTable/userListTable";
import UserForm from "./components/UserForm/userForm";
import axios from "axios";

function App() {
  let [users, setUsers] = useState([]);
  const [userData, setUserData] = useState(null);
  const [searchTypes, setSearchTypes] = useState("username");
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleUserData = (data) => {
    setUserData(data);
  };

  const searchUser = (event) => {
    event.preventDefault();
    if (searchTypes === "username") {
      setUsers(
        users.filter(
          (user) =>
            user.username.toLowerCase().search(searchKeyword.toLowerCase()) >= 0
        )
      );
    }
    if (searchTypes === "email") {
      setUsers(
        users.filter(
          (user) =>
            user.email.toLowerCase().search(searchKeyword.toLowerCase()) >= 0
        )
      );
    }
    if (searchTypes === "experience") {
      // eslint-disable-next-line eqeqeq
      setUsers(users.filter((user) => user.experience == searchKeyword));
    }
    if (searchTypes === "lvl") {
      // eslint-disable-next-line eqeqeq
      setUsers(users.filter((user) => user.lvl == searchKeyword));
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("http://localhost:4000/api/v1/players");
        setUsers(res.data.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const addUser = async (data) => {
    try {
      await axios.post("http://localhost:4000/api/v1/players/", data);
    } catch (error) {
      console.log(error);
    }
  };
  const editUser = async (data) => {
    try {
      await axios.put(`http://localhost:4000/api/v1/players/${data.id}`, data);
    } catch (error) {
      console.log(error);
    }
  };

  const [showModal, setShowModal] = useState(false);
  const [methodFunction, setMethodFunction] = useState("");
  const onHandleShowModal = () => setShowModal(true);
  const onHandleCloseModal = () => setShowModal(false);

  const getUserAddForm = () => {
    setMethodFunction("Add");
    onHandleShowModal();
  };
  const getUserEditForm = (data) => {
    setMethodFunction("Edit");
    handleUserData(data);
    onHandleShowModal();
  };

  return (
    <div className="container">
      <div className="mt-4 d-flex justify-content-between">
        <div className=" text-start">
          <Button variant="primary" onClick={getUserAddForm}>
            Add User
          </Button>
        </div>

        <div className="text-end row">
          <div className="col-3 align-self-center">Search by:</div>
          <Form className="d-flex col-9" onSubmit={searchUser}>
            <Form.Select
              aria-label="Default select example"
              className="w-50 me-2"
              value={searchTypes}
              onChange={(item) => setSearchTypes(item.currentTarget.value)}
            >
              <option value="username">Username</option>
              <option value="email">Email</option>
              <option value="experience">Experience</option>
              <option value="lvl">Level</option>
            </Form.Select>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchKeyword}
              onChange={(item) => setSearchKeyword(item.currentTarget.value)}
            />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
        </div>
      </div>
      <UserTable user={users} onGetUserEditForm={getUserEditForm} />
      <UserForm
        handleClose={onHandleCloseModal}
        show={showModal}
        methodFunction={methodFunction}
        onAddUser={addUser}
        onEditUser={editUser}
        onHandleUserData={handleUserData}
        userData={userData}
      />
    </div>
  );
}

export default App;
