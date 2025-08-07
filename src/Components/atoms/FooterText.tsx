import React from 'react';

interface TextProps {
  text?: string;
  className?: string;
  variant?: 'title' | 'subtitle' | 'body';
}

const variants: Record<'title' | 'subtitle' | 'body', string> = {
  title: 'text-xl font-bold text-black',
  subtitle: 'text-sm text-gray-600',
  body: 'text-base text-gray-800',
};

const Text: React.FC<TextProps> = ({ text = '', className = '', variant = 'body' }) => {
  return (
    <p className={`${variants[variant]} ${className}`}>
      {text}
    </p>
  );
};

export default Text;