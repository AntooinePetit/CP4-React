import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/components/NotFound.scss";

const NotFound = () => {
  document.title = "Page introuvable";
  return (
    <>
      <Header />

      <main>
        <section id="not-found">
          <h1>Page introuvable</h1>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default NotFound;
