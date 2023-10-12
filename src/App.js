import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";
import Home from "./pages/Home/Home";

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 20);

    return () => {
      clearTimeout(loadTimer);
      clearInterval(progressInterval);
    };
  }, []);

  if (loading) {
    return <Loader counter={progress} />;
  }

  return <Home />;
}

export default App;
