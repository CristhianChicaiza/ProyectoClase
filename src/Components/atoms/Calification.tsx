import React from "react";
import Img from "../atoms/Img";

interface ObjectProps {
  textA: string;
}

const Calification: React.FC<ObjectProps> = ({ textA }) => (
  <>
    <span className="text-4xl  font-sans text-yellow-400 bg-gray-600 px-2"><Img src={""}/></span>
    <span className="text-4xl font-sans Neue text-gray-600 px-2">{textA}</span>
  </>
);

export default Calification;

