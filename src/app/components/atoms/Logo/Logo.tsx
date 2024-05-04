import Image from 'next/image';
import React from 'react';

export default function Logo() {
  return (
    <div className="relative h-6 w-6">
      <Image alt="logo" src={'/logo-mobile.svg'} fill />;
    </div>
  );
}
