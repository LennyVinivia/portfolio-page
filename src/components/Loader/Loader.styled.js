import styled from "@emotion/styled";

export const LoaderStyle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .loader-circle {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.1); // You can adjust the border color and thickness here
    display: flex;
    align-items: center;
    justify-content: center;

    .counter {
      position: absolute;
      z-index: 1;
    }
  }

  .loader-line-mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 60px;
    height: 120px;
    overflow: hidden;
    transform-origin: 60px 60px;
    animation: rotate 1.2s infinite linear;
  }

  .loader-line {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    position: relative;
    border: 1px solid black; // You can adjust the border color and thickness here
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
