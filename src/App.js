import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";
import Home from "./pages/Home/Home";
import About from "./components/About/About";

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const preloadImages = (imagesArray) => {
    return Promise.all(
      imagesArray.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      })
    );
  };

  useEffect(() => {
    const imagesArray = [
      "/portfolio-page/img/Hero_Image.png",
      "/portfolio-page/img/Bedroom_Homepage.png",
      "/portfolio-page/img/Living_Room2.png",
      "/portfolio-page/img/Portrait_Lenny.png",
    ];
    preloadImages(imagesArray).catch((error) =>
      console.error("Image loading failed:", error)
    );
    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 10);

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
