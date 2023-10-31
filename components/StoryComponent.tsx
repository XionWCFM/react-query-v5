import React from 'react';

interface StoryComponentProps {
  children: React.ReactNode;
}

const StoryComponent = ({ children }: StoryComponentProps) => {
  return <div>{children}</div>;
};

export default StoryComponent;
