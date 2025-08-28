import { MapPin, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "../styles/components/Card.scss";

type CardProps = {
  id: string;
  title: { fr: string; en: string };
  location: string;
  picture: string[];
  tags: { fr: string; en: string }[];
  rating: string;
};

const Card = ({ id, title, location, picture, tags, rating }: CardProps) => {
  const stars = [1, 2, 3, 4, 5];
  const { i18n } = useTranslation();
  return (
    <article className="card">
      <Link to={`/logement/${id}`}>
        <img src={picture[0]} alt={title[i18n.language as "fr" | "en"]} /> {/* On assure à Typescript que la clé est valide sinon erreur */}
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
