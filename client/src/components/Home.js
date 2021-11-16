import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home-page">
      <div className="homee">
        <img src="/images/arrow.svg" alt="arrow" className="arrow" />
        <div className="hello">
          <img src="/images/hey.svg" alt="hey" />
          <h2>I'm Feriel Jabri</h2>
          <h3>A Junior Full Stack JS Web Developer </h3>
        </div>
        <img src="/images/feriel.png" alt="feriel" className="feriel" />
        <div className="social">
          <a href="https://www.facebook.com/ange.f.tunisie/">
            <img src="/images/facebook.svg" alt="facebook" />
          </a>
          <a href="https://www.instagram.com/feri878/?hl=fr">
            <img src="/images/instagramme.svg" alt="instagram" />
          </a>
          <a href="https://www.linkedin.com/in/feriel-jabri/">
            <img src="/images/linkedin.svg" alt="linkedin" />
          </a>
          <a href="https://github.com/feriel-j">
            <img src="/images/github.svg" alt="github" />
          </a>
        </div>
      </div>

      <Link to="/Portfolio" className="link">
        <button>Check Portfolio</button>
      </Link>
      <Link to="/Contact" className="link">
        <button>Contact here</button>
      </Link>
      <div className="section2">
        <h1>
          <span>What</span> we <span>are</span> offreing
          <span>you</span> !!
        </h1>

        <div className="gif">
          <div className="box design">
            <img
              src="/images/figma.gif"
              alt="figma"
              width="130px"
              height="100px"
            />
            <h2>Designing</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="box frontend">
            <img
              src="/images/frontend.gif"
              alt="front"
              width="130px"
              height="100px"
            />
            <h2>Front-End</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="box backtend">
            <img
              src="/images/backend.gif"
              alt="back"
              width="130px"
              height="100px"
            />
            <h2>Back-End</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
