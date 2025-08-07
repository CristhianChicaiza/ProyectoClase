import React from 'react';

const Subtitle: React.FC<{ text: string }> = ({ text }) => {
  return <h2 className="text-2xl font-semibold text-start text-gray-600">{text}</h2>;
};

export default Subtitle;
