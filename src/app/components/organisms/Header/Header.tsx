import React from 'react';
import HeaderLogoTitle from '../../molecules/HeaderLogoTitle.tsx/HeaderLogoTitle';
import EditAddBoard from '../../molecules/EditAddBoard/EditAddBoard';
import useData from '@/app/utils/useData';

export default function Header() {
  const { mode, AllBoardsModal } = useData();
  return (
    <div
      className={`h-16 w-full px-4 ${AllBoardsModal ? 'z-10' : 'z-10'} ${
        mode ? 'bg-white ' : 'bg-DarkGrey'
      } flex items-center justify-between`}
    >
      <HeaderLogoTitle />
      <EditAddBoard />
    </div>
  );
}
