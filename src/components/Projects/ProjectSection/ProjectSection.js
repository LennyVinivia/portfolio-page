import { useInView } from "react-intersection-observer";
import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";

const ProjectSection = ({
  src,
  title,
  description,
  overlayDescription,
  index,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "40%",
    triggerOnce: true,
  });

  return (
    <section
      className={`projects-section ${inView ? "is-in-view" : ""}`}
      ref={ref}
    >
      <figure className="projects-figure">
        <img src={src} alt={`visual for project ${index}`} />
        <div className="overlay">
          <div className="overlay-text">
            <h3>{title}</h3>
            <p>{overlayDescription}</p>
            <div className="tech-stack">
              <p>Tech Stack</p>
              <div className="stack-icons">
                <JavascriptIcon className="stack-icon" />
                <CssIcon className="stack-icon" />
                <HtmlIcon className="stack-icon" />
              </div>
            </div>
          </div>
        </div>
      </figure>
      <div className="projects-content">
        <p className="projects-index">/{index}</p>
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
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
  );
};

export default ProjectSection;
