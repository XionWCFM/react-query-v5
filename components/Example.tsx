'use client';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import React from 'react';

interface ExampleProps {}

const Example = ({}: ExampleProps) => {
  const query = useSuspenseQuery({
    queryKey: ['hi'],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/api`);
      await new Promise((resolve) => {
        setTimeout(() => resolve('hi'), 2000);
      });
      const data = await response.json();
      return data;
    },
  });

  return (
    <div>
      <div className="">{query.data.data}</div>
      <div className="">example</div>
    </div>
  );
};

export default Example;
