import useData from '@/app/utils/useData';
import React from 'react';

export default function BoardsCount() {
  const { data } = useData();
  return (
    <div className="text-MediumGrey font-bold text-xs tracking-[2.4px] self-start ml-6">
      ALL BOARDS ({data.length})
    </div>
  );
}
