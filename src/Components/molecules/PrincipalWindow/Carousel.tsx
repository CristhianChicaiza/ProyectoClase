import { useEffect, useRef, useState } from "react";
import arrowRight from "../../../image/boxicons/arrowright.svg";
import arrowLeft from "../../../image/boxicons/arrowleft.svg";

import category1 from "../../../image/category1.jpg";
import category2 from "../../../image/category2.jpg";
import category3 from "../../../image/category3.jpg";
import category4 from "../../../image/category4.jpg";

const AutomaticCarrousel = () => {
  const Images = [
    category1,
    category2,
    category3,
    category4,];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);


  const handlePrev = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + Images.length) % Images.length);
  const handleNext = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length);


  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };
  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Images.length);
    }, 3000);
  };


  useEffect(() => {
    startAutoPlay();
    return () => {
      stopAutoPlay();
    };
  }, []);


const scrollToCurrentIndex = () => {
  const container = containerRef.current;
  if (container) {
    container.scrollTo({
      left: currentIndex * container.clientWidth,
      behavior: "smooth",
    });
  }
};

  useEffect(() => {
    scrollToCurrentIndex();
  }, [currentIndex]);


  return (
    <>

<div className="flex flex-r items-center justify-center gap-4 py-4">
   <button onClick={handlePrev}>
          <img
            src={arrowLeft}
            alt="Anterior"
            className="w-10 h-10 hover:scale-105 transition-transform"
          />
        </button>
  <div
    ref={containerRef}
    onMouseEnter={stopAutoPlay}
    onMouseLeave={startAutoPlay}
  >
    <img
      src={Images[currentIndex]}
      alt={`Imagen ${currentIndex}`}
      className="h-[300px] w-[400px] object-cover rounded"
    />
  </div>
        <button onClick={handleNext}>
          <img
            src={arrowRight}
            alt="Siguiente"
            className="w-10 h-10 hover:scale-105 transition-transform"
          />
        </button>
</div>
</>
  );
}
export default AutomaticCarrousel;