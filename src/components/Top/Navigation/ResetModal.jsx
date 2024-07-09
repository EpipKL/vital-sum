import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

const resetLocalStorage = () => {
  localStorage.clear();
  window.location.reload();
};

const ResetModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };

  return (
    <>
      <Button variant="secondary" onClick={handleShow} className="ms-2">
        <FontAwesomeIcon icon={faRotateRight} />
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reset All</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Would you like to reset all values & modules?</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={resetLocalStorage}>
            Confirm
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ResetModal;
