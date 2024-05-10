import useData from '@/app/utils/useData';
import React from 'react';

export default function AddColumnButton() {
  const { data } = useData();
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="h-full w-full flex items-center justify-center">
        <div
          className={`bg-MainPurple h-12 w-[174px] flex items-center justify-center rounded-[24px] cursor-pointer`}
        >
          <p className="text-[15px] font-bold text-white">+ Add New Column</p>
        </div>
      </div>
    </div>
  );
}
