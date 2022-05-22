import Button from "react-bootstrap/Button";

function UserItem(props) {
  const onClickEditUser = () => {
    props.onCallEditForm(props.item);
  };
  const onClickDelete = () => {
    props.onCallDeleteModal(props.item.id);
  };

  return (
    <>
      <tr>
        <td>{props.item.id}</td>
        <td>{props.item.username}</td>
        <td>{props.item.email}</td>
        <td>{props.item.experience}</td>
        <td>{props.item.lvl}</td>
        <td className="text-center">
          <Button variant="warning" className="me-2" onClick={onClickEditUser}>
            Edit
          </Button>
          <Button variant="danger" className="ms-2" onClick={onClickDelete}>
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
}

export default UserItem;
