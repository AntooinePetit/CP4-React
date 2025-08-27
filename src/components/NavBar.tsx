import { Link } from "react-router-dom";
import "../styles/components/NavBar.scss";

interface NavBarProps {
  setClass?: boolean;
}

const NavBar = ({ setClass }: NavBarProps) => {
  return (
    <nav className={setClass ? "active" : ""}>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="#">À propos</Link>
        </li>
        <li>
          <Link to="#">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
