import MutationComponent from '@/components/MutationComponent';
import SuspenseComponent from '@/components/SuspenseComponent';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

export default function Home() {
  return (
    <div className="">
      <SuspenseComponent />
    </div>
  );
}
