'use client';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Presentation from './Presentation';

interface ContainerProps {}

const Container = ({}: ContainerProps) => {
  const hi = useQuery({
    queryKey: ['hello world'],
    queryFn: async () => {
      await new Promise((res, rej) => {
        setTimeout(() => {
          res('success');
        }, 5000);
      });
      return '데이터는 그냥 string이군요';
    },
  });
  return <Presentation>{hi.data}</Presentation>;
};

export default Container;
