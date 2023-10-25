import styled from "@emotion/styled";

export const ProjectStyle = styled.div`
  min-height: 100%;
  overflow-x: hidden;
  width: auto;

  main {
    width: 100%;
    padding: 25px;
    display: flex;
  }
  .intro {
    position: relative;
    min-width: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .intro-index {
      font-size: 20px;
    }

    .intro-title {
      font-size: 100px;
      margin-bottom: 10px;
      margin-top: 20px;
    }

    .intro-profession {
      font-size: 45px;
    }

    .intro-footer {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      margin-top: auto;

      .scroll-hint {
        cursor: pointer;
      }
    }
  }

  .projects-container {
    display: flex;
    gap: 200px;
    margin-left: 15vw;

    .projects-section {
      display: flex;
      gap: 20px;

      .projects-figure {
        border-radius: 15px;
        overflow: hidden;
        height: 85vh;
        width: 35vw;
        min-width: 600px;
        display: block;
        position: relative;

        img {
          height: 100%;
          object-fit: cover;
        }
      }
      .projects-content {
        display: flex;
        flex-direction: column;
        width: 300px;
        height: 100%;

        .project-title {
          font-size: 45px;
          margin: 10px 0 0 0;
        }

        .project-description {
        }

        .projects-footer {
          margin-top: auto;
          display: flex;
          flex-direction: column;

          .projects-label {
            margin: 0;
            font-size: 14px;
          }
          .client-name {
            font-size: 20px;
            margin-top: 5px;
            margin-bottom: 5px;
          }

          .projects-link {
            margin-top: 5px;
            margin-bottom: 10px;

            a {
              color: black;
              text-decoration: none;
            }

            a:hover {
              color: gray;
            }
          }
        }
      }
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;

  -ms-overflow-style: none;

  .intro span {
    display: inline-block;
    opacity: 0;
    filter: blur(4px);
    animation: fade-in 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  @keyframes fade-in {
    100% {
      opacity: 1;
      filter: blur(0);
    }
  }

  .intro span:nth-child(1) {
    animation-delay: 0.1s;
  }

  .intro span:nth-child(2) {
    animation-delay: 0.2s;
  }

  .intro span:nth-child(3) {
    animation-delay: 0.3s;
  }

  .intro span:nth-child(4) {
    animation-delay: 0.4s;
  }

  .intro span:nth-child(5) {
    animation-delay: 0.5s;
  }

  .intro span:nth-child(6) {
    animation-delay: 0.6s;
  }

  .intro span:nth-child(7) {
    animation-delay: 0.7s;
  }
`;
