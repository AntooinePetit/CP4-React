import Accomodations from "../components/Accomodations";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home = () => {
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
