import imgAbout from "/public/assets/image-about-dark.jpg"
export default function SectionTwo() {
  return (
    <section className="two">
      <div className="image">
        <img src={imgAbout} alt="image-chair" />
      </div>
    </section>
  );
}
