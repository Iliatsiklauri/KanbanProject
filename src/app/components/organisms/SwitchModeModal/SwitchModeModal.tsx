import useData from '@/app/utils/useData';
import React from 'react';
import ColorSwitch from '../../molecules/ColorSwitch/ColorSwitch';

export default function SwitchModeModal() {
  const { data, mode, AllBoardsModal, setAllBoardModal, setMode } = useData();
  return (
    <div
      className={`${
        mode ? 'bg-white' : 'bg-DarkGrey'
      } min-w-[264px] w-[50%] h-[300px] py-4 shadow-[0_10px_20px_0_rgba(54,78,126,0.25)] rounded-lg flex items-start justify-center flex-col gap-4`}
    >
      <ColorSwitch />
    </div>
  );
}
