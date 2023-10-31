import React from 'react';

interface PresentationProps {
  children?: React.ReactNode;
}

const Presentation = ({ children }: PresentationProps) => {
  return (
    <div className=" bg-purple-500 px-8 py-4 text-white rounded-lg font-bold max-w-[200px] text-center flex justify-center items-center">
      {children}
    </div>
  );
};

export default Presentation;
