import styled from "@emotion/styled";

export const HomeStyle = styled.div`
  height: 100vh;
  overflow-x: hidden;

  main {
    padding: 50px;
    display: flex;
  }
  .intro {
    position: relative;
    min-width: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .intro-title {
      font-size: 80px;
      margin-bottom: 10px;
    }

    .intro-profession {
      font-size: 40px;
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
      gap: 50px;

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
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;

  -ms-overflow-style: none;
`;
