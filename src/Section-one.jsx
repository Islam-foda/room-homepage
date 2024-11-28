export default function SectionOne({ title, desc }) {
  return (
    <section className="one">
      <div className="content">
        <h1>{title}</h1>
        <p>{desc}</p>
        <h3>
          shop now{" "}
          <span>
            <img src="/src/assets/icon-arrow.svg" alt="arrow"></img>
          </span>
        </h3>
      </div>
      <div className="slider-btn">
        <button>
          <svg>
            <use href="/src/assets/icon-angle-left.svg"></use>
          </svg>
        </button>
        <button>
          <svg>
            <use href="/src/assets/icon-angle-right.svg"></use>
          </svg>
        </button>
      </div>
    </section>
  );
}
