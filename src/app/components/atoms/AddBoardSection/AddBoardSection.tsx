import React from 'react';
import IconBoard from '../../../icons/IconBoard/IconBoard';

export default function AddBoardSection() {
  return (
    <div className="w-full pl-6 mt-3 flex items-center gap-3 justify-start cursor-pointer">
      <IconBoard add fill />
      <p className="text-MainPurple font-bold old text-[15px]">+ Create New Board</p>
    </div>
  );
}
