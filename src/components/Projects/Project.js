import { useEffect, useRef } from "react";
import { ProjectStyle } from "./Project.styled";
import EastIcon from "@mui/icons-material/East";
import About from "../About/About";
import Timeline from "../Timeline/Timeline";
import ProjectSection from "./ProjectSection/ProjectSection";

const Project = () => {
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

  useEffect(() => {
    const container = containerRef.current;
    let startX, scrollLeft;

    const startTouch = (e) => {
      startX = e.touches[0].pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const moveTouch = (e) => {
      e.preventDefault();
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = x - startX;
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener("touchstart", startTouch);
    container.addEventListener("touchmove", moveTouch);

    return () => {
      container.removeEventListener("touchstart", startTouch);
      container.removeEventListener("touchmove", moveTouch);
    };
  }, []);

  return (
    <ProjectStyle ref={containerRef}>
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
              cursus, ut auctor nulla interdum.
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
          <ProjectSection
            src="/portfolio-page/img/Bedroom_Homepage.png"
            title="Portfolio Page"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat."
            overlayDescription="This project was created while I was visiting the Web
                    Engineering course at the BFH."
            index="1"
          />
          <ProjectSection
            src="/portfolio-page/img/Hero_Image.png"
            title="Oppenheimer"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat."
            overlayDescription="This project was created while I was visiting the Web
                    Engineering course at the BFH."
            index="2"
          />
          <ProjectSection
            src="/portfolio-page/img/Living_Room2.png"
            title="Manhatten"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat."
            overlayDescription="This project was created while I was visiting the Web
                    Engineering course at the BFH."
            index="3"
          />
        </div>
      </main>
      <Timeline />
      <About />
    </ProjectStyle>
  );
};

export default Project;
