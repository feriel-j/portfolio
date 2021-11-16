import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { projectDel } from "../JS/projetSlice/projectSlice";
import Swal from "sweetalert2/dist/sweetalert2.js";
import UpdateProject from "./UpdateProject";

const PortfolioCard = ({ project, ping, setping }) => {
  const dispatch = useDispatch();
  return (
    <div className="project-card">
      <Card>
        <Card.Body>
          <Card.Title className="title">{project.title}</Card.Title>
          <Card.Img src={project.img} className="cardImg" />
          <Card.Text className="description">{project.description}</Card.Text>
        </Card.Body>
        <div className="buttons">
          <button
            onClick={() => {
              dispatch(projectDel(project._id));
              Swal.fire("Good job!", "Project removed!", "success");
              setping(!ping);
            }}
          >
            delete
          </button>

          <UpdateProject
            ping={ping}
            setping={setping}
            projectId={project._id}
          />
        </div>
      </Card>
    </div>
  );
};

export default PortfolioCard;
