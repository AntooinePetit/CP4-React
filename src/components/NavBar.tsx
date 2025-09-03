import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "../styles/components/NavBar.scss";

export interface NavBarProps {
  setClass?: boolean;
}

/**
 * Menu de navigation pour le header
 * 
 * @param NavBarProps - Le composant accepte setClass en tant que props
 * @param NavBarProps.setClass - Valeur d'affichage conditionnel du menu de navigation en version responsive mobile
 * @returns - Le rendu du composant menu de navigation
 * 
 * @example 
 * // Affichage du menu de navigation
 * <NavBar setClass={isActive} />
 */

const NavBar = ({ setClass }: NavBarProps) => {
  const { t } = useTranslation();
  return (
    <nav className={setClass ? "active" : ""}>
      <ul>
        <li>
          <Link to="/">{t("nav.home")}</Link>
        </li>
        <li>
          <Link to="#">{t("nav.about")}</Link>
        </li>
        <li>
          <Link to="#">{t("nav.contact")}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
