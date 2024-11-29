import arrowIcon from "./assets/icon-arrow.svg"
import arrowRight from "./assets/icon-angle-right.svg"
import arrowLeft from "./assets/icon-angle-left.svg"
export default function SectionOne({ title, desc, prev, next }) {
  return (
    <section className="one">
      <div className="content">
        <h1>{title}</h1>
        <p>{desc}</p>
        <h3>
          shop now{" "}
          <span data-image="image">
            <img src={arrowIcon} alt="arrow"></img>
          </span>
        </h3>
      </div>
      <div className="slider-btn">
        <button onClick={prev} className="navigate-arrow">
          <img src={arrowLeft} />
        </button>
        <button onClick={next} className="navigate-arrow">
          <img src={arrowRight} />
        </button>
      </div>
    </section>
  );
}
