import React from "react";

const About = () => {
  return (
    <div className="about">
      <img src="/images/who.png" alt="feirel" className="who-fer" />
      <div className="jump">
        <div className="info line1">
          <h2>
            <span>
              <img src="/images/list.svg" alt="arrow" />
            </span>
            Birthday : 17-06-1988
          </h2>

          <h2>
            <span>
              <img src="/images/list.svg" alt="arrow" />
            </span>
            Phone : +216 21 122 439
          </h2>

          <h2>
            <span>
              <img src="/images/list.svg" alt="arrow" />
            </span>
            City : Tunis, Tunisia
          </h2>
        </div>
        <img src="/images/juping.png" alt="jumping" className="jumping" />
        <div className="info line2">
          <h2>
            <span>
              <img src="/images/list.svg" alt="arrow" />
            </span>
            Age : 33
          </h2>

          <h2>
            <span>
              <img src="/images/list.svg" alt="arrow" />
            </span>
            Email: feriel.jabri@yahoo.fr
          </h2>

          <h2>
            <span>
              <img src="/images/list.svg" alt="arrow" />
            </span>
            Degree :Engineer
          </h2>
        </div>
      </div>
      <div className="background">
        <div className="skillist l1">
          <img
            src="/images/wordpress.svg"
            alt="wordpress"
            className="wordpress"
          />
          <img src="/images/html.svg" alt="html" className="html" />
          <img src="/images/figma.svg" alt="figma" className="figma" />
        </div>
        <img src="/images/skills.png" alt="skill" className="skill" />
        <div className="skillist l2">
          <img src="/images/react.svg" alt="react" className="react" />
          <img src="/images/javascript.svg" alt="js" className="js" />
          <img src="/images/adobe.svg" alt="adobe" className="adobe" />
        </div>
      </div>
      <img src="/images/skillsgroup.png" alt="skills" className="skills-G" />
    </div>
  );
};

export default About;
