'use client';
import React from 'react';

interface FunnelExampleProps {}

const FunnelExample = ({}: FunnelExampleProps) => {
  const [step, setStep] = React.useState<'hi' | 'bye'>('bye');
  const [client, setClient] = React.useState(false);
  React.useEffect(() => {
    setClient(true);
  }, []);
  return <div>dsadsa</div>;
};

export default FunnelExample;
