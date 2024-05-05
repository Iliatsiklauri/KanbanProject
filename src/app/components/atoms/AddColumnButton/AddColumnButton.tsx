import React from 'react';

export default function AddColumnButton() {
  return (
    <div
      className={`bg-MainPurple h-12 w-[174px] flex items-center justify-center rounded-[24px] cursor-pointer`}
    >
      <p className="text-[15px] font-bold text-white">+ Add New Column</p>
    </div>
  );
}
