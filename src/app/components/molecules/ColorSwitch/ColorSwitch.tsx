import useData from '@/app/utils/useData';
import Image from 'next/image';
import React from 'react';
import ColorSwitchButton from '../../atoms/ColorSwitchButton.tsx/ColorSwitchButton';

export default function ColorSwitch() {
  const { mode, setMode } = useData();
  return (
    <div className="w-full px-4">
      <div
        className={` px-4 h-12 rounded-lg flex items-center justify-center gap-6
          ${mode ? 'bg-lightGreylightBg' : 'bg-veryDarkGreyDarkBg'}`}
      >
        <Image alt="sun" src={'/icon-dark-theme.svg'} width={20} height={20} />
        <ColorSwitchButton />
        <Image alt="sun" src={'/icon-light-theme.svg'} width={20} height={20} />
      </div>
    </div>
  );
}
