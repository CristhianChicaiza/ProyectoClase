import React from 'react';

interface TextProps {
  text: string;
}
const Text: React.FC<TextProps> = ({ text }) => {
  return (
  <h2 className="text-1xl font-semibold text-start text-black">{text}</h2>
  );
};

export default Text;
