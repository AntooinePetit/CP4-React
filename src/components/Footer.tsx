import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "../styles/components/Footer.scss";

/**
 * Composant d'affichage du footer
 * 
 * @returns Le rendu du footer avec les éléments de traduction
 * 
 * @example
 * // Affichage du Footer
 * <Footer />
 */

const Footer = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <footer>
      <div className="container-1280">
        <div>
          <ul>
            <li className="group-title">{t("footer.about.title")}</li>
            <li>
              <Link to="#">{t("footer.about.story")}</Link>
            </li>
            <li>
              <Link to="#">{t("footer.about.team")}</Link>
            </li>
            <li>
              <Link to="#">{t("footer.about.careers")}</Link>
            </li>
            <li>
              <Link to="#">{t("footer.about.press")}</Link>
            </li>
          </ul>

          <ul>
            <li className="group-title">{t("footer.support.title")}</li>
            <li>
              <Link to="#">{t("footer.support.help-center")}</Link>
            </li>
            <li>
              <Link to="#">{t("footer.support.contact-us")}</Link>
            </li>
            <li>
              <Link to="#">{t("footer.support.signal-problem")}</Link>
            </li>
            <li>
              <Link to="/not-found">{t("footer.support.404-page")}</Link>
            </li>
          </ul>

          <ul>
            <li className="group-title">{t("footer.legal.title")}</li>
            <li>
              <Link to="#">{t("footer.legal.conditions")}</Link>
            </li>
            <li>
              <Link to="#">{t("footer.legal.confidentiality")}</Link>
            </li>
            <li>
              <Link to="#">{t("footer.legal.mentions")}</Link>
            </li>
            <li>
              <Link to="#">{t("footer.legal.cookies")}</Link>
            </li>
          </ul>
        </div>
        <p>{t("footer.rights")}</p>
        <div id="languages">
          <button onClick={() => changeLanguage("fr")}>
            <ReactCountryFlag
              countryCode="FR"
              svg
              style={{
                width: "30px",
                height: "30px",
              }}
            />
          </button>
          <button onClick={() => changeLanguage("en")}>
            <ReactCountryFlag
              countryCode="GB"
              svg
              style={{
                width: "30px",
                height: "30px",
              }}
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
