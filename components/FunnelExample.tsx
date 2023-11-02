'use client';
import { Funnel } from '@/hook/useFunnel';
import React from 'react';

interface FunnelExampleProps {}

const FunnelExample = ({}: FunnelExampleProps) => {
  const [step, setStep] = React.useState<'hi' | 'bye'>('bye');

  return (
    <div>
      {step === 'hi' && <div className="">hi</div>}
      {step === 'bye' && <div className="">bye</div>}
    </div>
  );
};

export default FunnelExample;
