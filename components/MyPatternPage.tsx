'use client';
import React from 'react';
import Presentation from './Presentation';
import SuspenseBoundary from './SuspenseBoundary';
import Container from './Container';

const LOADING_TEXT = '데이터를 가져오는 중이에요';
const ERROR_TEXT = '에러입니다.';

const MyPatternPage = () => {
  return (
    <div>
      <SuspenseBoundary
        suspense={<Presentation>{LOADING_TEXT}</Presentation>}
        error={<Presentation>{ERROR_TEXT}</Presentation>}
      >
        <Container />
      </SuspenseBoundary>
    </div>
  );
};

export default MyPatternPage;
