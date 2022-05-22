import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";

function confirmDelete(props) {
  const deleteUser = async () => {
    try {
      await axios.delete(`http://localhost:4000/api/v1/players/${props.id}`);
      window.location.reload(false);
      props.handleClose();
    } catch (error) {
      console.log(error);
    }
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
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete this data?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={deleteUser}>
            Yes, I'm Sure
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default confirmDelete;
