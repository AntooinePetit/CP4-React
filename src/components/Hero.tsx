import { useTranslation } from "react-i18next";
import "../styles/components/Hero.scss";

/**
 * Section Hero de la page d'accueil
 * @returns Affichage du Hero sur la page d'accueil
 * 
 * @example
 * // Affichage du hero
 * <Hero />
 */
const Hero = () => {
  const { t } = useTranslation();
  return (
    <section id="hero">
      <div className="container-1280">
        <h1>{t("home.title")}</h1>
        <p>{t("home.description")}</p>
      </div>
    </section>
  );
};

export default Hero;
