import React from 'react';
import NotPure from './NotPure';

interface OrganismProps {}

const Organism = ({}: OrganismProps) => {
  return (
    <div>
      <div className=""> 대충 다른 컴포넌트</div>
      <React.Suspense>
        <NotPure />
      </React.Suspense>
    </div>
  );
};

export default Organism;
