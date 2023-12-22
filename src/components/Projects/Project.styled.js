import styled from "@emotion/styled";

export const ProjectStyle = styled.div`
  min-height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  width: auto;
  display: flex;

  main {
    width: auto;
    padding: 25px;
    display: flex;
  }
  .intro {
    position: relative;
    max-width: 30vw;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-right: 100px;

    .intro-index {
      font-size: 20px;
    }

    .intro-title {
      font-size: 84px;
      margin-bottom: 10px;
      margin-top: 20px;
    }

    @media screen and (max-width: 620px) {
      .intro-title {
        font-size: 70px;
        margin-bottom: 10px;
        margin-top: 0;
      }
    }

    @media screen and (max-width: 450px) {
      .intro-title {
        font-size: 60px;
        margin-bottom: 10px;
        margin-top: 0;
      }
    }

    .intro-profession {
      font-size: 45px;
      margin: 0;
    }

    @media screen and (max-width: 450px) {
      .intro-profession {
        font-size: 30px;
        margin: 0;
      }
    }

    .intro-text {
      width: 100%;

      span {
        width: 100%;
      }
    }

    .intro-footer {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      margin-top: auto;
      padding-bottom: 30px;

      .scroll-hint {
        cursor: pointer;
      }
    }
  }

  .projects-container {
    display: flex;
    gap: 200px;
    margin-left: 15vw;

    .projects-section.is-in-view {
      opacity: 1;
      transform: translateY(0);
    }

    .projects-section {
      display: flex;
      gap: 20px;
      align-items: stretch;
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 1s ease-out, transform 1s ease-out;

      .projects-figure {
        border-radius: 15px;
        overflow: hidden;
        height: 89vh;
        width: 40vw;
        min-width: 400px;
        display: block;
        position: relative;

        img {
          height: 100%;
          object-fit: cover;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7); // This is your overlay color
          opacity: 0;
          transition: opacity 0.5s ease;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .overlay-text {
          color: white;
          text-align: center;
          transform: translateY(20px);
          transition: transform 0.5s ease;

          p {
            width: 250px;
          }

          .tech-stack {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 10px;

            p {
              margin: 0;
              font-size: 20px;
            }

            .stack-icons {
              display: flex;
              gap: 5px;
              flex-wrap: wrap;

              .stack-icon {
                font-size: 30px;
              }
            }
          }
        }

        &:hover .overlay {
          opacity: 1;
        }

        &:hover .overlay-text {
          transform: translateY(0);
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
    width: 50vw;
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

  .fade-in-section {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  .fade-in-section.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
