import styled from "@emotion/styled";

export const AboutStyle = styled.div`
  width: auto;
  height: 100vh;
  background: black;
  overflow: hidden;

  .about {
    height: 100%;
    width: 80%;
    padding-top: 100px;
    padding-left: 60px;
    padding-right: 60px;
    margin: 0 auto;

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
