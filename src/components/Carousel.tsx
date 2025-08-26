import { ArrowLeft, ArrowRight } from "lucide-react";
import "../styles/components/Carousel.scss";

type CarouselProps = {
  pictures: string[];
};

const Carousel = ({ pictures }: CarouselProps) => {
  return (
    <div id="carousel">
      <img src={pictures[0]} alt="" />
      <div id="buttons">
        <button>
          <ArrowLeft />
        </button>
        <button>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
