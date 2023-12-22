import { AboutStyle } from "./About.styled";
import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import PhpIcon from "@mui/icons-material/Php";
import { useEffect, useState } from "react";

const About = () => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    try {
      const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      console.error("Error fetching dad joke:", error);
    }
  };

  return (
    <AboutStyle>
      <div className="about">
        <h1 className="about-title">About Me</h1>
        <section className="about-section">
          <div className="left">
            <h1 className="desc-title">Some Facts</h1>
            <p className="about-desc">
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
              Lorem Ipsum Lorem Ipsum Lorem Ipsum
            </p>
            <span>Funny Dad Joke: {joke}</span>
            <div className="dad-button" onClick={fetchJoke}>
              Another Dad joke!
            </div>
          </div>
          <div className="middle">
            <h1 className="skills-title">My Skills</h1>
            <div className="skills">
              <span className="skill-badge">
                <JavascriptIcon className="skill-icon" />
                <p className="skill-title">JavaScript</p>
              </span>
              <span className="skill-badge">
                <HtmlIcon className="skill-icon" />
                <p className="skill-title">HTML</p>
              </span>
              <span className="skill-badge">
                <CssIcon className="skill-icon" />
                <p className="skill-title">CSS</p>
              </span>
              <span className="skill-badge">
                <CssIcon className="skill-icon" />
                <p className="skill-title">Java</p>
              </span>
              <span className="skill-badge">
                <CssIcon className="skill-icon" />
                <p className="skill-title">C#</p>
              </span>
              <span className="skill-badge">
                <CssIcon className="skill-icon" />
                <p className="skill-title">Python</p>
              </span>
              <span className="skill-badge">
                <PhpIcon className="skill-icon" />
                <p className="skill-title">PHP</p>
              </span>
              <span className="skill-badge">
                <CssIcon className="skill-icon" />
                <p className="skill-title">MSSQL</p>
              </span>
            </div>
          </div>
          <div className="right">
            <h1 className="portrait-title">My Face</h1>
            <div className="portrait">
              <img src="/portfolio-page/img/Portrait_Lenny.png" alt="" />
            </div>
          </div>
        </section>
      </div>
    </AboutStyle>
  );
};

export default About;
