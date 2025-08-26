import { MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/components/Card.scss";

const Card = () => {
  return (
    <article className="card">
      <Link to="/logement/1">
        <img
          src="/images/marseille.jpg"
          alt="Appartement cosy \u00e0 Marseille"
        />
        <div>
          <h2>Appartement moderne centre-ville</h2>
          <p>
            <MapPin size={14}/>
            Paris 11ème, France
          </p>
          <div>
            <p className="tag">Wifi</p>
            <p className="tag">Cuisine équipée</p>
            <p className="tag">Parking</p>
          </div>
          <p>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            (4.9)
          </p>
        </div>
      </Link>
    </article>
  );
};

export default Card;
