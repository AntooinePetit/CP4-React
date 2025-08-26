import { ArrowDown, MapPin } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import data from "../data/logements.json";
import "../styles/components/Details.scss";

const Details = () => {
  const { id } = useParams();
  const acco = data.find((item) => item.id === id);
  if (acco) {
    const { title, location, pictures, tags, host, description, equipments } =
      acco;
    return (
      <>
        <Header />

        <main>
          <section id="detail">
            <Carousel pictures={pictures} />
            <div id="infos">
              <h1>{title}</h1>
              <p>
                <MapPin size={14} />
                {location}
              </p>
              <div id="tags">
                {tags.map((tag) => (
                  <p className="tag">{tag}</p>
                ))}
              </div>
              <div id="host-infos">
                <img src={host.picture} alt={`Photo de ${host.name}`} />
                <div>
                  <h3>{host.name}</h3>
                  <p>Hôte depuis 3 ans</p>
                </div>
              </div>
              <div id="description">
                <button>
                  <h2>Description</h2>
                  <ArrowDown size={16} />
                </button>
              </div>
              <div id="equipments">
                <button>
                  <h2>Équipements</h2>
                  <ArrowDown size={16} />
                </button>
              </div>
            </div>
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
