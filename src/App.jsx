import "./App.css";
import { data } from "./data";
import Header from "./Header";
import SectionOne from "./Section-one";
import SectionThree from "./Section-Three";
import SectionTwo from "./Section-two";

function App() {
  return (
    <>
      <div className="container">
        <Header image={data[0].image}  title={data[0].title} />
        <SectionOne title={data[0].title} desc={data[0].desc} />
        <SectionTwo/>
        <SectionThree/>
      </div>
    </>
  );
}

export default App;