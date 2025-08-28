import {
  AirVent,
  ArrowDown,
  ArrowUp,
  BrickWallFire,
  Cable,
  Coffee,
  CookingPot,
  Droplets,
  Flame,
  FlameKindling,
  Hamburger,
  Heater,
  MapPin,
  SeparatorHorizontal,
  Toilet,
  ToyBrick,
  Trees,
  Tv,
  Utensils,
  WashingMachine,
  WavesLadder,
  Wifi,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import data from "../data/logements.json";
import "../styles/components/Details.scss";

const Details = () => {
  const icons = {
    Wifi: <Wifi />,
    Cuisine: <Utensils />,
    "T\u00e9l\u00e9vision": <Tv />,
    Climatisation: <AirVent />,
    Chauffage: <Heater />,
    "Cuisine \u00e9quip\u00e9e": <CookingPot />,
    "Machine \u00e0 laver": <WashingMachine />,
    Jardin: <Trees />,
    Barbecue: <Hamburger />,
    "Chemin\u00e9e": <FlameKindling />,
    "Po\u00eale \u00e0 bois": <Flame />,
    "Eau chaude": <Droplets />,
    "Toilettes s\u00e8ches": <Toilet />,
    "Machine \u00e0 caf\u00e9": <Coffee />,
    Piscine: <WavesLadder />,
    "Lave-vaisselle": <WashingMachine />,
    Kitchenette: <CookingPot />,
    Sauna: <BrickWallFire />,
    "Cuisine moderne": <CookingPot />,
    Ascenseur: <SeparatorHorizontal />,
    "Jeux enfants": <ToyBrick />,
    Terrasse: <Trees />,
    "Electricit\u00e9": <Cable />,
  };
  const { id } = useParams();
  const [isActiveDesc, setActiveDesc] = useState(false);
  const [isActiveEquip, setActiveEquip] = useState(false);
  const acco = data.find((item) => item.id === id);
  const { t, i18n } = useTranslation();
  if (acco) {
    const { title, location, pictures, tags, host, description, equipments } =
      acco;
    document.title = title[i18n.language as "fr" | "en"];

    const showDesc = () => {
      setActiveDesc(!isActiveDesc);
    };

    const showEquip = () => {
      setActiveEquip(!isActiveEquip);
    };

    return (
      <>
        <Header />

        <main>
          <section id="detail">
            <Carousel pictures={pictures} />
            <div id="infos">
              <h1>{title[i18n.language as "fr" | "en"]}</h1>
              <p>
                <MapPin size={14} />
                {location}
              </p>
              <div id="tags">
                {tags.map((tag) => (
                  <p className="tag" key={tag[i18n.language as "fr" | "en"]}>
                    {tag[i18n.language as "fr" | "en"]}
                  </p>
                ))}
              </div>
              <div id="host-infos">
                <img src={host.picture} alt={`Photo de ${host.name}`} />
                <div>
                  <h3>{host.name}</h3>
                  <p>{t("details.host-age")}</p>
                </div>
              </div>
              <div id="description" className={isActiveDesc ? "active" : ""}>
                <button onClick={showDesc}>
                  <h2>{t("details.description-title")}</h2>
                  {isActiveDesc ? (
                    <ArrowUp size={16} />
                  ) : (
                    <ArrowDown size={16} />
                  )}
                </button>
                <p>{description[i18n.language as "fr" | "en"]}</p>
              </div>
              <div id="equipments" className={isActiveEquip ? "active" : ""}>
                <button onClick={showEquip}>
                  <h2>{t("details.equipments-title")}</h2>
                  {isActiveEquip ? (
                    <ArrowUp size={16} />
                  ) : (
                    <ArrowDown size={16} />
                  )}
                </button>
                <div>
                  {equipments.map((equipment) => (
                    <p key={equipment[i18n.language as "fr" | "en"]}>
                      {
                        icons[
                          equipment["fr"] as keyof typeof icons
                        ] /* Sécurité de typage (nécessaire en TS) */
                      }
                      {equipment[i18n.language as "fr" | "en"]}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </>
    );
  } else {
    document.title = "Logement introuvable";
    return (
      <>
        <Header />

        <main>
          <section id="not-found">
            <h1>{t("details.error-accomodation")}</h1>
            <Link to="/">{t("details.list-link")}</Link>
          </section>
        </main>

        <Footer />
      </>
    );
  }
};

export default Details;
