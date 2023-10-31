import React from 'react';
import StoryComponent from './StoryComponent';

interface NotPureProps {}

const NotPure = ({}: NotPureProps) => {
  // 뭔가 대충 쿼리같은거 하는 로직
  return <StoryComponent>'대충 쿼리결과물'</StoryComponent>;
};

export default NotPure;
