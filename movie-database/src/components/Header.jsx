import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); 

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/home">
          <svg className="logo-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 428.76 439.27">
            <path fill="currentColor" d="M428.76,439.27v-247.72s-214.26,123.7-214.26,123.7v-103.24h-84.2c43.79-9.59,77.56-45.93,83.33-91.02,6.74,52.75,51.8,93.51,106.38,93.51,59.23,0,107.25-48.02,107.25-107.25S379.24,0,320.01,0c-54.58,0-99.63,40.77-106.38,93.51C206.88,40.77,161.83,0,107.25,0,48.02,0,0,48.02,0,107.25c0,51.32,36.05,94.21,84.2,104.76H.5v214h214v-110.44l214.26,123.7Z"/>
          </svg>

        </Link>
      </div>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/favorites" onClick={() => setMenuOpen(false)}>Favorites</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
      </ul>
    </header>
  );
};

export default Header;
