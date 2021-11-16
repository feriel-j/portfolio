import React from "react";
import { useSelector } from "react-redux";
import AddPortfolio from "./AddPortfolio";
import PortfolioCard from "./PortfolioCard";

const Portfolio = ({ ping, setping }) => {
  const projects = useSelector((state) => state.project.project);
  return (
    <div className="projects">
      <div className="project-list">
        {projects ? (
          projects.map((el) => (
            <PortfolioCard project={el} ping={ping} setping={setping} />
          ))
        ) : (
          <img
            src="https://cdn.dribbble.com/users/1186261/screenshots/3718681/_______.gif"
            alt=""
          />
        )}
      </div>
      <AddPortfolio ping={ping} setping={setping} />
    </div>
  );
};

export default Portfolio;
