import useData from '@/app/utils/useData';
import React from 'react';
import BoardsCount from '../../atoms/BoardsCount/BoardsCount';
import BoardTitles from '../../molecules/BoardTitles/BoardTitles';
import ColorSwitch from '../../molecules/ColorSwitch/ColorSwitch';

export default function SideBar() {
  const { sideBar, mode } = useData();
  return (
    <div
      className={`${
        sideBar ? 'hidden md:flex flex-col items-start justify-between py-6' : 'hidden'
      } min-h-screen h-full relative w-[260px] flex-shrink-0 border-r-[1px] ${
        mode ? 'bg-white border-r-linesLight' : 'bg-DarkGrey border-r-linesDark'
      } `}
    >
      <div className="w-full relative flex items-center justify-center flex-col gap-5">
        <BoardsCount />
        <BoardTitles />
      </div>
      <ColorSwitch />
    </div>
  );
}
