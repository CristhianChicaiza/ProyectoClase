import { useEffect, useRef, useState } from "react";
import Image from "../atoms/img";
import ButtonURL from "../atoms/ButtonURL";
import category1 from "../../image/category1.jpg";
import category2 from "../../image/category2.jpg";
import category3 from "../../image/category3.jpg";
import category4 from "../../image/category4.jpg";

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
<div>
  {currentIndex}
</div>
<div className="flex flex-r items-center justify-center gap-4">
  <ButtonURL onClick={handlePrev} label="Prev" />

  <div
    ref={containerRef}
    onMouseEnter={stopAutoPlay}
    onMouseLeave={startAutoPlay}
  >
    <Image
      src={Images[currentIndex]}
      alt={`Imagen ${currentIndex}`}
      width=""
      className="h-[300px] w-[400px] object-cover rounded"
    />
  </div>
  <ButtonURL onClick={handleNext} label="Next" />
</div>
</>
  );
}
export default AutomaticCarrousel;