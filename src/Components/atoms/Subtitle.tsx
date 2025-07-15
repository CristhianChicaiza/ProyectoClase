import React from 'react';

const Subtitle: React.FC<{ text: string }> = ({ text }) => {
  return <h2 className="text-2xl font-semibold text-center text-red-600">{text}</h2>;
};

export default Subtitle;
