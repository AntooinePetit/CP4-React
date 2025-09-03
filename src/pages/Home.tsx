import Accomodations from "../components/Accomodations";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

/**
 * La page d'accueil du site
 * @returns La page d'accueil du site avec modification du titre du document
 */
const Home = () => {
  document.title = "Kasa";
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Accomodations />
      </main>

      <Footer />
    </>
  );
};

export default Home;
