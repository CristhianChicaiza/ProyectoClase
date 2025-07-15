import { useEffect, useRef, useState } from "react";
import Image from "../atoms/img";
import ButtonURL from "../atoms/ButtonURL";
import category1 from "../../image/category1.jpg";
import category2 from "../../image/category2.jpg";
import category3 from "../../image/category3.jpg";
import category4 from "../../image/category4.jpg";

const Carrousel = () => {
const Images = [
    category1,
    category2,
    category3,
    category4,
];

const [currentIndex, setCurrentIndex] = useState(0);

const handlePrev = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + Images.length) % Images.length );
const handleNext = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length );

  useEffect(() => {

  }, []);
  return (
    <div className="flex flex-r items-center justify-center gap-4">
      <ButtonURL onClick={handlePrev}>Prev</ButtonURL>
      <div>
{currentIndex}
  <Image
    src={Images[currentIndex]}
    alt={`Imagen ${currentIndex}`}
    width="100%"
    className=" h-[400px] object-cover rounded"
  />

      </div>
      <ButtonURL onClick={handleNext}>Next</ButtonURL>
    </div>
  );
}
export default Carrousel;