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
  const [board, setBoard] = useState<string | null>(null);
  const [AllBoardsModal, setAllBoardModal] = useState(false);
  return (
    <GlobalContext.Provider
      value={{ data, mode, setMode, AllBoardsModal, setAllBoardModal, board, setBoard }}
    >
      <div className="flex flex-col h-screen w-full relative">
        <Header />
        <div className="h-full">{children}</div>
        <ModalBackGround type={1}>
          <SwitchModeModal />
        </ModalBackGround>
      </div>
    </GlobalContext.Provider>
  );
}
