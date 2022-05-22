import Table from "react-bootstrap/Table";
import { useState } from "react";
import UserItem from "./userListItem";
import ConfirmDelete from "../modals/deleteConfirm";

function UserTable(props) {
  const callEditForm = (data) => {
    props.onGetUserEditForm(data);
  };
  const [deleteID, setDeleteID] = useState("");
  const [showModal, setShowModal] = useState(false);
  const onHandleShowDeleteModal = (id) => {
    setDeleteID(id);
    setShowModal(true);
  };
  const onHandleCloseModal = () => setShowModal(false);
  return (
    <div>
      <Table striped bordered hover className="mx-auto mt-4">
        <thead>
          <tr>
            <th className="col-1">ID</th>
            <th className="col-3">Username</th>
            <th className="col-3">Email</th>
            <th className="col-1">EXP</th>
            <th className="col-1">Level</th>
            <th className="col-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.user.map((item, index) => {
            return (
              <UserItem
                item={item}
                index={index}
                key={index}
                onCallEditForm={callEditForm}
                onCallDeleteModal={onHandleShowDeleteModal}
              />
            );
          })}
        </tbody>
      </Table>
      <ConfirmDelete
        handleClose={onHandleCloseModal}
        show={showModal}
        id={deleteID}
      />
    </div>
  );
}

export default UserTable;
