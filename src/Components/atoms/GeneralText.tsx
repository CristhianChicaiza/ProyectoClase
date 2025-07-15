import React from 'react';

const Text: React.FC<{ text: string }> = ({ text }) => {
  return <h2 className="text-1xl font-semibold text-start text-white-600">{text}</h2>;
};

export default Text;
