import { useQuery } from '@tanstack/react-query';
import React from 'react';

interface WrongComponentProps {}

const WrongComponent = ({}: WrongComponentProps) => {
  const hi = useQuery({
    queryKey: ['it is wrong!!!!'],
    queryFn: async () => {
      return '그치만... 개발자쨩.. 이렇게 해버리면...';
    },
  });

  return (
    <div>
      <div className=" bg-yellow-50">{hi.data}</div>
    </div>
  );
};

export default WrongComponent;
