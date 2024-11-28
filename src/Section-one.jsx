export default function SectionOne({ title, desc, prev, next }) {
  return (
    <section className="one">
      <div className="content">
        <h1>{title}</h1>
        <p>{desc}</p>
        <h3>
          shop now{" "}
          <span data-image="image">
            <img src="/src/assets/icon-arrow.svg" alt="arrow"></img>
          </span>
        </h3>
      </div>
      <div className="slider-btn">
        <button onClick={prev} className="navigate-arrow">
          <img src="/src/assets/icon-angle-left.svg" />
        </button>
        <button onClick={next} className="navigate-arrow">
          <img src="/src/assets/icon-angle-right.svg" />
        </button>
      </div>
    </section>
  );
}
