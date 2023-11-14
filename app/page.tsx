import { useQuery } from '@tanstack/react-query';
import React from 'react';

export default function Home() {
  const a = useQuery({
    queryKey: ['hi'],
    queryFn: async () => Promise.resolve(5),
  });
  if(a.error) {}
  return (
    <div className="">
      <div className="">hi</div>
    </div>
  );
}
