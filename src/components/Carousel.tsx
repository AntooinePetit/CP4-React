import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import "../styles/components/Carousel.scss";

export interface CarouselProps {
  pictures: string[];
};

/**
 * Composant de carousel d'images simple
 * @param CarouselProps - Contient les paramètres de la fonction
 * @param CarouselProps.pictures - Contient les images à afficher dans le carousel
 * @returns Un carousel d'images du logement
 * 
 * @example
 * // Affichage des images du logement sous forme de carousel
 * <Carousel pictures={pictures} />
 */
const Carousel = ({ pictures }: CarouselProps) => {
  const [index, setIndex] = useState(0);
  function nextPicture() {
    if (index + 1 > pictures.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  function prevPicture() {
    if (index - 1 < 0) {
      setIndex(pictures.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  return (
    <div id="carousel">
      <img src={pictures[index]} alt={`Photo du logement, numéro ${index}`} />
      <div id="buttons">
        <button onClick={prevPicture}>
          <ArrowLeft />
        </button>
        <button onClick={nextPicture}>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
