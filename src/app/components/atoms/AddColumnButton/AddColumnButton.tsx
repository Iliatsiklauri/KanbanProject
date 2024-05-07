import useData from '@/app/utils/useData';
import React from 'react';

export default function AddColumnButton() {
  const { data } = useData();
  return (
    <div>
      {data.length == 0 ? (
        <div
          className={`bg-MainPurple h-12 w-[174px] flex items-center justify-center rounded-[24px] cursor-pointer`}
        >
          <p className="text-[15px] font-bold text-white">+ Add New Column</p>
        </div>
      ) : null}
    </div>
  );
}
