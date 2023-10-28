import Example from '@/components/Example';
import React from 'react';

export default function Home() {
  return (
    <div className="">
      hello world
      <React.Suspense fallback={<div>하이서스펜스</div>}>
        <Example />
      </React.Suspense>
    </div>
  );
}
