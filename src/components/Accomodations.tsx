import data from "../data/logements.json";
import "../styles/components/Accomodations.scss";
import Card from "./Card";

/**
 * Composant affichant tous les logements disponibles
 * @returns Affichage des logements disponibles
 * 
 * @example
 * // Affichage des logements
 * <Accomodations />
 */
const Accomodations = () => {
  return (
    <section id="accomodations">
      <div className="container-1280">
        {data.map((accomodation) => (
          <Card
            key={accomodation.id}
            id={accomodation.id}
            title={accomodation.title}
            location={accomodation.location}
            picture={accomodation.pictures}
            tags={accomodation.tags}
            rating={accomodation.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default Accomodations;
