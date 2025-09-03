import { MapPin, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "../styles/components/Card.scss";

export interface CardProps {
  id: string;
  title: { fr: string; en: string };
  location: string;
  picture: string[];
  tags: { fr: string; en: string }[];
  rating: string;
};

/**
 * Affichage des logements sous forme de carte cliquable
 * @param CardProps - Contient tous les paramètres d'informations de logement
 * @param CardProps.id - Identifiant du logement
 * @param CardProps.title - Nom du logement
 * @param CardProps.location - Localisation du logement
 * @param CardProps.picture - Photos du logement
 * @param CardProps.tags - Tag informatif du logement
 * @param CardProps.rating - Note attribuée au logement
 * @returns Une carte cliquable contenant les informations principales du logement
 * 
 * @example
 * // Utilisation de la carte pour afficher tous les logements
 * {data.map((accomodation) => (
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
 */

const Card = ({ id, title, location, picture, tags, rating }: CardProps) => {
  const stars = [1, 2, 3, 4, 5];
  const { i18n } = useTranslation();
  return (
    <article className="card">
      <Link to={`/logement/${id}`}>
        <img src={picture[0]} alt={title[i18n.language as "fr" | "en"]} />{" "}
        {/* On assure à Typescript que la clé est valide sinon erreur */}
        <div>
          <h2>{title[i18n.language as "fr" | "en"]}</h2>
          <p>
            <MapPin size={14} />
            {location}
          </p>
          <div>
            {tags.map((tag) => (
              <p className="tag" key={tag[i18n.language as "fr" | "en"]}>
                {tag[i18n.language as "fr" | "en"]}
              </p>
            ))}
          </div>
          <p>
            {stars.map((star) =>
              star <= Number(rating) ? (
                <Star key={star} className="filled" size={15} />
              ) : (
                <Star key={star} size={15} />
              )
            )}
            ({rating}
            {rating === "5" ? "" : `.${Math.floor(Math.random() * 9) + 1}`})
          </p>
        </div>
      </Link>
    </article>
  );
};

export default Card;
