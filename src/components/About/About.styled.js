import styled from "@emotion/styled";

export const AboutStyle = styled.div`
  width: auto;
  height: 100vh;
  background: black;

  .about {
    height: 100%;
    width: 80%;
    padding-top: 100px;
    padding-left: 60px;
    padding-right: 60px;
    margin: 0 auto;
    margin-left: 50px;

    .about-title {
      color: white;
      font-size: 60px;
    }

    .about-section {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 50px;

      .left {
        align-self: flex-start;
        width: 400px;

        span {
          color: white;
        }

        .dad-button {
          width: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 10px;
          padding: 10px;
          border: 2px solid white;
          border-radius: 10px;
          color: white;
          cursor: pointer;
        }

        .desc-title {
          color: white;
          margin-top: 0;
        }
        .about-desc {
          margin-top: 0;
          color: white;
        }
      }

      .middle {
        align-self: flex-start;
        width: 400px;
        .skills-title {
          margin-top: 0;
          color: white;
        }

        .skills {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;

          .skill-badge {
            display: flex;
            gap: 5px;
            align-items: center;
            border: 2px solid grey;
            padding: 5px;
            border-radius: 10px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            will-change: transform;
            perspective: 500px;

            &:hover {
              transform: translateY(-10px) scale(1.1);
              box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            }

            .skill-title {
              color: white;
              margin: 0;
            }

            .skill-icon {
              color: white;
              font-size: 35px;
            }
          }
        }
      }

      .right {
        align-self: flex-start;
        .portrait-title {
          margin-top: 0;
          color: white;
        }

        .portrait {
          img {
            max-widht: 400px;
            max-height: 400px;
          }
        }
      }
    }
  }
`;
