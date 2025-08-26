import { Link } from "react-router-dom";
import "../styles/components/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container-1280">
        <div>
          <ul>
            <li className="group-title">À propos de Kasa</li>
            <li>
              <Link to="#">Notre histoire</Link>
            </li>
            <li>
              <Link to="#">Équipe</Link>
            </li>
            <li>
              <Link to="#">Carrières</Link>
            </li>
            <li>
              <Link to="#">Presse</Link>
            </li>
          </ul>

          <ul>
            <li className="group-title">Support</li>
            <li>
              <Link to="#">Centre d'aide</Link>
            </li>
            <li>
              <Link to="#">Nous contacter</Link>
            </li>
            <li>
              <Link to="#">Signaler un problème</Link>
            </li>
            <li>
              <Link to="/not-found">Page 404</Link>
            </li>
          </ul>

          <ul>
            <li className="group-title">Légal</li>
            <li>
              <Link to="#">Conditions d'utilisation</Link>
            </li>
            <li>
              <Link to="#">Politique de confidentialité</Link>
            </li>
            <li>
              <Link to="#">Mentions légales</Link>
            </li>
            <li>
              <Link to="#">Cookies</Link>
            </li>
          </ul>
        </div>
        <p>© 2024 Kasa. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
