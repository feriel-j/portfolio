import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { projectAdd } from "../JS/projetSlice/projectSlice";
import Swal from "sweetalert2/dist/sweetalert2.js";

const AddPortfolio = ({ ping, setping }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [project, setProject] = useState({
    title: "",
    img: "",
    description: "",
  });
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(projectAdd(project));
    Swal.fire("Good job!", "Project added!", "success");
    setping(!ping);
  };
  return (
    <div>
      <Button variant="secondary" onClick={handleShow} className="add-project">
        Add project
      </Button>

      <Modal show={show} onHide={handleClose} classname="modal">
        <Modal.Header closeButton>
          <Modal.Title>Add Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="enter project title"
            onChange={(e) => {
              setProject({ ...project, title: e.target.value });
            }}
          />

          <input
            type="text"
            placeholder="enterproject image"
            onChange={(e) => {
              setProject({ ...project, img: e.target.value });
            }}
          />

          <input
            type="text"
            placeholder="enter project description"
            onChange={(e) => {
              setProject({ ...project, description: e.target.value });
            }}
          />
          {/* <input
            type="text"
            placeholder="enter project link"
            onChange={(e) => {
              setProject({ ...project, link: e.target.value });
            }}
          /> */}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              handleClose();
              handleAdd();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddPortfolio;
