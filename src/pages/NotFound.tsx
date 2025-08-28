import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/components/NotFound.scss";

const NotFound = () => {
  const { t } = useTranslation();
  document.title = t("error-404");
  return (
    <>
      <Header />

      <main>
        <section id="not-found">
          <h1>{t("error-404")}</h1>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default NotFound;
