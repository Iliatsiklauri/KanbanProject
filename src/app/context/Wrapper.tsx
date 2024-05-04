'use client';
import React, { useState } from 'react';
import data from '@/app/data/data.json';
import { GlobalContext } from '../data/types';

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  return (
    <GlobalContext.Provider value={{ data, mode, setMode }}>
      <div className="h-screen flex flex-col">
        <header className="h-[100px] bg-veryDarkGreyDarkBg w-full">
          <button
            onClick={() => {
              setSidebar(!sidebar);
              console.log('first');
            }}
            className="h-10 w-[200px] bg-red"
          >
            Click
          </button>
        </header>
        <div className="flex  relative h-full w-full bg-linesDark">
          <aside
            className={`h-full w-[200px] bg-red  ${
              sidebar ? 'relative' : 'absolute left-[-200px]'
            }`}
          ></aside>
          <div className="w-full h-full overflow-x-auto">{children}</div>
        </div>
      </div>
    </GlobalContext.Provider>
  );
}
