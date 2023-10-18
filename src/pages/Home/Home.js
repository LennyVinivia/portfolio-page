import { useEffect, useRef } from "react";
import { HomeStyle } from "./Home.styled";
import EastIcon from "@mui/icons-material/East";

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      containerRef.current.scrollLeft += e.deltaY;
    };

    const container = containerRef.current;
    container.addEventListener("wheel", handleWheel);

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const handleArrowClick = () => {
    const currentScrollPosition = containerRef.current.scrollLeft;
    const projectSections = document.querySelectorAll(".projects-section");
    let targetScrollPosition = null;

    projectSections.forEach((section) => {
      const sectionPosition = section.offsetLeft;
      if (
        sectionPosition > currentScrollPosition &&
        targetScrollPosition === null
      ) {
        targetScrollPosition = sectionPosition;
      }
    });

    if (targetScrollPosition !== null) {
      containerRef.current.scrollTo({
        left: targetScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <HomeStyle ref={containerRef}>
      <main>
        <section className="intro">
          <p className="intro-index">
            <span>/INDEX/</span>
          </p>
          <h1 className="intro-title">
            <span>Lenny Ruprecht</span>
          </h1>
          <h2 className="intro-profession">
            <span>Software Engineer</span>
          </h2>
          <p className="intro-text">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              imperdiet nulla, non porta orci. Nunc sollicitudin nibh in tortor
              cursus, ut auctor nulla interdum. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Vivamus id elit lacinia, pharetra augue id, varius mi. In commodo
              augue non neque dignissim vestibulum.
            </span>
          </p>
          <footer className="intro-footer">
            <div className="scroll-hint">
              <EastIcon
                style={{ fontSize: "25px" }}
                onClick={handleArrowClick}
              ></EastIcon>
            </div>
          </footer>
        </section>
        <div className="projects-container">
          <section className="projects-section" id="project-1">
            <figure className="projects-figure">
              <img
                src="/portfolio-page/img/Hero_Image.png"
                alt="visual for project 1"
              />
            </figure>
            <div className="projects-content">
              <p className="projects-index">/1</p>
              <h2 className="project-title">Oppenheimer</h2>
              <p className="project-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="projects-footer">
                <div className="info">
                  <p className="projects-label">Client</p>
                  <p className="client-name">Microsoft</p>
                  <p className="projects-label">Link</p>
                  <div className="projects-link">
                    <a href="https://google.com">/ VIEW PAGE</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="projects-section" id="project-2">
            <figure className="projects-figure">
              <img
                src="/portfolio-page/img/Bedroom_Homepage.png"
                alt="visual for project 2"
              />
            </figure>
            <div className="projects-content">
              <p className="projects-index">/2</p>
              <h2 className="project-title">Manhatten</h2>
              <p className="project-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="projects-footer">
                <div className="info">
                  <p className="projects-label">Client</p>
                  <p className="client-name">Microsoft</p>
                  <p className="projects-label">Link</p>
                  <div className="projects-link">
                    <a href="https://google.com">/ VIEW PAGE</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="projects-section" id="project-3">
            <figure className="projects-figure">
              <img
                src="/portfolio-page/img/Living_Room2.png"
                alt="visual for project 3"
              />
            </figure>
            <div className="projects-content">
              <p className="projects-index">/3</p>
              <h2 className="project-title">Apollo</h2>
              <p className="project-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="projects-footer">
                <div className="info">
                  <p className="projects-label">Client</p>
                  <p className="client-name">Microsoft</p>
                  <p className="projects-label">Link</p>
                  <div className="projects-link">
                    <a href="https://google.com">/ VIEW PAGE</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </HomeStyle>
  );
};

export default Home;
