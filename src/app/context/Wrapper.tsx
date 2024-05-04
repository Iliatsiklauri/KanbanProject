'use client';
import React, { useState } from 'react';
import jsonData from '@/app/data/data.json';
import { GlobalContext } from '../data/types';
import Header from '../components/organisms/Header/Header';
import ModalBackGround from '../components/organisms/ModalBackGround/ModalBackGround';
import SwitchModeModal from '../components/organisms/SwitchModeModal/SwitchModeModal';

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState(jsonData);
  const [mode, setMode] = useState(false);
  const [AllBoardsModal, setAllBoardModal] = useState(false);
  return (
    <GlobalContext.Provider
      value={{ data, mode, setMode, AllBoardsModal, setAllBoardModal }}
    >
      <div className="flex flex-col h-screen w-full relative">
        <Header />
        <div className="h-full">{children}</div>
        <ModalBackGround>
          <SwitchModeModal />
        </ModalBackGround>
      </div>
    </GlobalContext.Provider>
  );
}
