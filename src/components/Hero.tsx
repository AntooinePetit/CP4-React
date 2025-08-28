import { useTranslation } from "react-i18next";
import "../styles/components/Hero.scss";

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
