import React from "react";

interface LogoProps {
  textA: string;
  textB: string;
}

const Logo: React.FC<LogoProps> = ({ textA, textB }) => (
  <>
                <a href="" className="text-decoration-none">
                    <span className="text-4xl  font-sans text-yellow-400 bg-gray-600 px-2">{textA}</span>
                    <span className="text-4xl font-sans Neue text-gray-600 bg-yellow-400 px-2">{textB}</span>
                </a>
  </>
);

export default Logo;

