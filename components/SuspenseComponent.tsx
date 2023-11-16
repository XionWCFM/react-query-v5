'use client';
import { useSuspenseQuery } from '@tanstack/react-query';
import React from 'react';

interface SuspenseComponentProps {}

const SuspenseComponent = ({}: SuspenseComponentProps) => {
  const sus = useSuspenseQuery({
    queryKey: ['suspense'],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      return 'hi suspense';
    },
  });

  return <div>{sus.data}</div>;
};

export default SuspenseComponent;
