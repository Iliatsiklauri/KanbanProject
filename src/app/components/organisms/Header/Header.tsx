import { HeaderProps } from '@/app/data/types';
import React from 'react';
import HeaderLogoTitle from '../../molecules/HeaderLogoTitle.tsx/HeaderLogoTitle';
import EditAddBoard from '../../molecules/EditAddBoard/EditAddBoard';

export default function Header({ mode }: HeaderProps) {
  return (
    <div
      className={`h-16 w-full ${
        mode ? 'bg-white' : 'bg-DarkGrey px-4'
      } flex items-center justify-between`}
    >
      <HeaderLogoTitle mode={mode} />
      <EditAddBoard />
    </div>
  );
}
