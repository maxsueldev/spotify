import logoSpotify from "../../assets/logo/spotify-logo.png";
import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <img src={logoSpotify} alt="Logo Spotify" />
      <a className="header__link" href="/">
        <h1>Spotify</h1>
      </a>
    </header>
  );
};

export default Header;
