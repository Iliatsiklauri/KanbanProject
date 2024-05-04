import Image from 'next/image';
import React from 'react';

export default function Arrow() {
  return (
    <div className="relative h-[7px] w-[10px]">
      <Image alt="arrow" src={'/icon-chevron-down.svg'} fill />
    </div>
  );
}
