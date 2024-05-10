import React from 'react';
import HeaderLogoTitle from '../../molecules/HeaderLogoTitle.tsx/HeaderLogoTitle';
import EditAddBoard from '../../molecules/EditAddBoard/EditAddBoard';
import useData from '@/app/utils/useData';

export type headerType = {
  sideBar: boolean;
  setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({ setSideBar, sideBar }: headerType) {
  const { mode, AllBoardsModal } = useData();
  return (
    <div
      className={`h-16 w-full px-4 md:px-6 ${AllBoardsModal ? 'z-10' : 'z-10'} ${
        mode ? 'bg-white ' : 'bg-DarkGrey'
      } flex items-center justify-between md:border-b-[0px] md:border-opacity-10 ${
        mode ? 'md:border-linesDark' : 'md:border-linesLight'
      }`}
    >
      <HeaderLogoTitle setSideBar={setSideBar} sideBar={sideBar} />
      <EditAddBoard />
    </div>
  );
}
