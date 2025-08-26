import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import data from "../data/logements.json";
import "../styles/components/Details.scss";

const Details = () => {
  const { id } = useParams();
  console.log(id);
  const acco = data.find((item) => item.id === id);
  console.log(acco);
  if (acco) {
    return (
      <>
        <Header />

        <main>
          <section id="detail">
            <div id="caroussel">
              <button>
                <ArrowLeft />
              </button>
              <img src={acco.pictures[0]} alt="" />
              <button>
                <ArrowRight />
              </button>
            </div>
            <h1>{acco.title}</h1>
          </section>
        </main>

        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header />

        <main>
          <section id="not-found">
            <h1>Logement introuvable</h1>
            <Link to="/">Retourner à la liste des logements</Link>
          </section>
        </main>

        <Footer />
      </>
    );
  }
};

export default Details;
