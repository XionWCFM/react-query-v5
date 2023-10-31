import React from 'react';

interface XionButtonProps {
  children?: React.ReactNode;
  variant?: 'default' | 'primary';
}

const XionButton = ({ children, variant = 'default' }: XionButtonProps) => {
  const defaultStyle = '';
  const primaryStyle = 'bg-purple-500 text-white rounded-md px-16 py-8';
  const buttonClass = variant === 'default' ? defaultStyle : primaryStyle;
  return <button className={buttonClass}>{children}</button>;
};

export default XionButton;
