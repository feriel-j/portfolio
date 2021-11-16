import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { projectUp } from "../JS/projetSlice/projectSlice";
import Swal from "sweetalert2/dist/sweetalert2.js";

const UpdateProject = ({ projectId, ping, setping }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEdit = () => {
    dispatch(projectUp({ id: projectId, projectEdit }));
    Swal.fire("Good job!", "Project updated!", "success");
    setping(!ping);
  };
  const [projectEdit, setprojectEdit] = useState({
    title: "",
    img: "",
    description: "",
    link: "",
  });
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        edit
      </Button>
      <Modal show={show} onHide={handleClose} classname="modal">
        <Modal.Header closeButton>
          <Modal.Title>Project update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="enter project title"
            onChange={(e) => {
              setprojectEdit({ ...projectEdit, title: e.target.value });
            }}
          />

          <input
            type="text"
            placeholder="enterproject image"
            onChange={(e) => {
              setprojectEdit({ ...projectEdit, img: e.target.value });
            }}
          />

          <input
            type="text"
            placeholder="enter project description"
            onChange={(e) => {
              setprojectEdit({ ...projectEdit, description: e.target.value });
            }}
          />
          {/* <input
            type="text"
            placeholder="enter project link"
            onChange={(e) => {
              setprojectEdit({ ...projectEdit, link: e.target.value });
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
              handleEdit();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateProject;
