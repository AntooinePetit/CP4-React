import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/components/Header.scss";
import NavBar from "./NavBar";

/**
 * Composant de header avec gestion du menu responsive
 * 
 * @returns {JSX.element} - Le rendu du header 
 * 
 * @example
 * // Affichage du header
 * <Header />
 */

const Header = () => {
  const [isActive, setActive] = useState(false);
  /** @type {function} */
  const showNav = () => {
    setActive(!isActive);
  };
  document.addEventListener("scroll", () => {
    setActive(false);
  });
  return (
    <header>
      <div className="container-1280">
        <Link to="/" id="logo">
          Kasa
        </Link>

        <NavBar setClass={isActive} />

        <Menu id="burgermenu" onClick={showNav} />
      </div>
    </header>
  );
};

export default Header;
