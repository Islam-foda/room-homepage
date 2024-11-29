import logo from "/public/assets/logo.svg"
import burgerBtn from "/public/assets/icon-hamburger.svg"
import closeBtn from "/public/assets/icon-close.svg"
// import images from "./data"

export default function Header({ image, title }) {
  const btnMenu = document.getElementById("imgBurger");
  const imgClose = document.querySelector("[data-img-close]");
  const navMenu = document.getElementsByClassName("nav-contain")[0];

  if (btnMenu) {
    btnMenu.addEventListener("click", () => {
      imgClose.classList.add("close");
      navMenu.classList.add("burger-menu");
    });
  }
  if (imgClose) {
    imgClose.addEventListener("click", () => {
      navMenu.classList.remove("burger-menu");
      imgClose.classList.remove("close");
    });
  }
  return (
    <header className="header">
      <nav>
        <div className="room-logo">
          <a href="#">
            <img src={logo} alt="room-logo" />
          </a>
        </div>
        <button className="nav-burger" id="nav-burger">
          <img
            id="imgBurger"
            data-img-burger="burger"
            src={burgerBtn}
            alt="burger-icon"
          />
          <img
            data-img-close="close"
            src={closeBtn}
            alt="close-icon"
            style={{ display: "none" }}
          />
        </button>

        {/* add burger menu n the screen width 650px  */}
        <div className="nav-contain ">
          {" "}
          <ul className="nav-menu">
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">shop</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="img-slider" id="slider">
        <img src={image} alt={title} />
      </div>
    </header>
  );
}
