import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "../styles/components/NavBar.scss";

interface NavBarProps {
  setClass?: boolean;
}

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
