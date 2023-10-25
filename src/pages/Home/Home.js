import { HomeStyle } from "./Home.styled";
import Project from "../../components/Projects/Project";
import About from "../../components/About/About";

const Home = () => {
  return (
    <HomeStyle>
      <Project />
      <About />
    </HomeStyle>
  );
};

export default Home;
