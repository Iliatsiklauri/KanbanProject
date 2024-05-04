import React from 'react';
import Logo from '../../atoms/Logo/Logo';
import Arrow from '../../atoms/Arrow/Arrow';

export default function HeaderLogoTitle({ mode }: { mode: boolean }) {
  return (
    <div className="flex items-center justify-center gap-4">
      <Logo />
      <div className="flex gap-2 items-center justify-center">
        <h1 className={`text-lg font-bold ${mode ? 'text-NearBlack' : 'text-white'}`}>
          Platform Launch
        </h1>
        <Arrow />
      </div>
    </div>
  );
}
