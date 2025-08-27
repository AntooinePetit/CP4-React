import {
  AirVent,
  ArrowDown,
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
  if (acco) {
    const { title, location, pictures, tags, host, description, equipments } =
      acco;
    document.title = title;

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
              <h1>{title}</h1>
              <p>
                <MapPin size={14} />
                {location}
              </p>
              <div id="tags">
                {tags.map((tag) => (
                  <p className="tag" key={tag}>
                    {tag}
                  </p>
                ))}
              </div>
              <div id="host-infos">
                <img src={host.picture} alt={`Photo de ${host.name}`} />
                <div>
                  <h3>{host.name}</h3>
                  <p>Hôte depuis 3 ans</p>
                </div>
              </div>
              <div id="description" className={isActiveDesc ? "active" : ""}>
                <button onClick={showDesc}>
                  <h2>Description</h2>
                  <ArrowDown size={16} />
                </button>
                <p>{description}</p>
              </div>
              <div id="equipments" className={isActiveEquip ? "active" : ""}>
                <button onClick={showEquip}>
                  <h2>Équipements</h2>
                  <ArrowDown size={16} />
                </button>
                <div>
                  {equipments.map((equipment) => (
                    <p key={equipment}>
                      {icons[equipment as keyof typeof icons]}
                      {equipment}
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
