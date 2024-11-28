export default function Header({ image,title }) {
  return (
    <header className="header">
      <nav>
        <div className="room-logo">
          <img src="/src/assets/logo.svg" alt="room-logo" />
        </div>
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
        <div className="nav-burger">
          <img src="/src/assets/icon-hamburger.svg" alt="burger-icon" />
        </div>
      </nav>
      <div className="img-slider" id="slider">
        <img src={image} alt={title} />
      </div>
    </header>
  );
}
