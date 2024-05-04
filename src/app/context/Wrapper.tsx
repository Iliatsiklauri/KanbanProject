'use client';
import React, { useState } from 'react';
import jsonData from '@/app/data/data.json';
import { GlobalContext } from '../data/types';
import Header from '../components/organisms/Header/Header';

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState(jsonData || null);
  const [mode, setMode] = useState(false);
  return (
    <GlobalContext.Provider value={{ data, mode, setMode }}>
      <Header mode={mode} setMode={setMode} />
    </GlobalContext.Provider>
  );
}
