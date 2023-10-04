import { LoaderStyle } from "./Loader.styled";

const Loader = ({ counter }) => {
  return (
    <LoaderStyle>
      <div className="loader-circle">
        <div className="loader-line-mask">
          <div className="loader-line"></div>
        </div>
        <div className="counter">{counter}%</div>
      </div>
    </LoaderStyle>
  );
};

export default Loader;
