import React from 'react';

const Text: React.FC<{ text: string }> = ({ text }) => {
  return <h1 className="text-1xl text-start font-bold text-black-600">{text}</h1>;
};

export default Text;
