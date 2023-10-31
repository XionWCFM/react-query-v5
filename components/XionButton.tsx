import React from 'react';
import { motion } from 'framer-motion';
interface XionButtonProps {
  children?: React.ReactNode;
  variant?: 'default' | 'primary';
}

const XionButton = ({ children, variant = 'default' }: XionButtonProps) => {
  const defaultStyle = '';
  const primaryStyle = 'bg-purple-500 text-white rounded-md px-16 py-8';
  const buttonClass = variant === 'default' ? defaultStyle : primaryStyle;
  return (
    <div className="">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
        }}
      >
        안녕하세요
      </motion.div>
      <button className={buttonClass}>{children}</button>
    </div>
  );
};

export default XionButton;
