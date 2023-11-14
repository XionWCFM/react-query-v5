'use client';
import { useMutation } from '@tanstack/react-query';
import React from 'react';

interface MutationComponentProps {}

const MutationComponent = ({}: MutationComponentProps) => {
  const addTextMutation = useMutation({
    mutationFn: async (text: string) => {
      await new Promise((resolve) => {
        setTimeout(resolve, 5000);
      });
      return text;
    },
    onSettled: () =>
      console.log('여기서 invalidate를 해서 실제로 데이터를 업데이트해요'),
  });

  return (
    <div>
      <button onClick={() => addTextMutation.mutate('안녕하세요')}>
        좀 더 쉬워진 낙관적 업데이트 버튼
      </button>
      {addTextMutation.isPending ? (
        <div className="">{addTextMutation.variables}</div>
      ) : null}
    </div>
  );
};

export default MutationComponent;
