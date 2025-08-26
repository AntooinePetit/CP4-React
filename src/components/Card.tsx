import { MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/components/Card.scss";

type CardProps = {
  id: string;
  title: string;
  location: string;
  picture: string[];
  tags: string[];
  rating: string;
};

const Card = ({ id, title, location, picture, tags, rating }: CardProps) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <article className="card">
      <Link to={`/logement/${id}`}>
        <img src={picture[2]} alt={title} />
        <div>
          <h2>{title}</h2>
          <p>
            <MapPin size={14} />
            {location}
          </p>
          <div>
            {tags.map((tag) => (
              <p className="tag">{tag}</p>
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
