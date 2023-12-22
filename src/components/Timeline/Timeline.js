import { TimelineStyle } from "./Timeline.styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderSettings = {
  accessibility: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const data = [
  {
    name: "Securiton AG",
    year: "2016 - 2020",
    info: "I was doing my apprenticeship at Securiton AG as a IT-Guy. There I was learning a lot about software as well as hardware.",
  },
  {
    name: "Securiton AG",
    year: "2016 - 2020",
    info: "I was doing my apprenticeship at Securiton AG as a IT-Guy. There I was learning a lot about software as well as hardware.",
  },
  {
    name: "Securiton AG",
    year: "2016 - 2020",
    info: "I was doing my apprenticeship at Securiton AG as a IT-Guy. There I was learning a lot about software as well as hardware.",
  },
  {
    name: "Securiton AG",
    year: "2016 - 2020",
    info: "I was doing my apprenticeship at Securiton AG as a IT-Guy. There I was learning a lot about software as well as hardware.",
  },
  {
    name: "Securiton AG",
    year: "2016 - 2020",
    info: "I was doing my apprenticeship at Securiton AG as a IT-Guy. There I was learning a lot about software as well as hardware.",
  },
  {
    name: "Securiton AG",
    year: "2016 - 2020",
    info: "I was doing my apprenticeship at Securiton AG as a IT-Guy. There I was learning a lot about software as well as hardware.",
  },
  {
    name: "Securiton AG",
    year: "2016 - 2020",
    info: "I was doing my apprenticeship at Securiton AG as a IT-Guy. There I was learning a lot about software as well as hardware.",
  },
];

const Timeline = () => {
  return (
    <TimelineStyle>
      <div className="container">
        <div className="content">
          <h2>Curriculum Vitae</h2>
          <Slider {...SliderSettings}>
            {data.map((d) => (
              <div className="card">
                <div className="card-title">
                  <h2>{d.name}</h2>
                </div>
                <div className="card-desc">
                  <p className="card-year">{d.year}</p>
                  <p className="card-info">{d.info}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </TimelineStyle>
  );
};

export default Timeline;
