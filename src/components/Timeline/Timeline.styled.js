import styled from "@emotion/styled";

export const TimelineStyle = styled.div`
  background: black;
  width: 100vw;
  height: 100vh;

  .slick-slide > div {
    margin: 0 30px;
  }

  .container {
    width: 70%;
    margin: auto;
    color: white;
    padding-top: 12rem;

    .content {
      margin-top: 20px;
      pading: 0 50px;
    }

    .card {
      box-sizing: border-box;
      padding: 20px;
      margin: 20px;
      height: 40%;
      border: 2px solid white;
      border-radius: 10px;

      .card-title {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .card-desc {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;

        .card-year {
          margin: 0;
          margin-top: 20px;
          font-size: 30px;
          font-type: bold;
        }
      }
    }
  }
`;
