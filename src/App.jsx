import { useState } from "react";
import "./App.css";
import { data } from "./data";
import Header from "./Header";
import SectionFour from "./Section-four";
import SectionOne from "./Section-one";
import SectionThree from "./Section-three";
import SectionTwo from "./Section-two";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((preValue) => (preValue + 1) % data.length);
  };
  const handlePrev = () => {
    setCurrentIndex((preValue) => (preValue - 1 + data.length) % data.length);
  };

  return (
    <>
      <div className="container">
        <Header
          image={data[currentIndex].image}
          title={data[currentIndex].title}
        />
        <SectionOne
          title={data[currentIndex].title}
          desc={data[currentIndex].desc}
          prev={handlePrev}
          next={handleNext}
        />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </div>
    </>
  );
}

export default App;
