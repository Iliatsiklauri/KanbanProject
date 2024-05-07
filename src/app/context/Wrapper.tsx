'use client';
import React, { useState } from 'react';
import jsonData from '@/app/data/data.json';
import { Board, GlobalContext } from '../data/types';
import Header from '../components/organisms/Header/Header';
import ModalBackGround from '../components/organisms/ModalBackGround/ModalBackGround';
import SwitchModeModal from '../components/organisms/SwitchModeModal/SwitchModeModal';

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<Board[] | []>(jsonData);
  const [mode, setMode] = useState(false);
  const [board, setBoard] = useState<string | null>(data[0]?.name || null);
  const [AllBoardsModal, setAllBoardModal] = useState(false);
  return (
    <GlobalContext.Provider
      value={{ data, mode, setMode, AllBoardsModal, setAllBoardModal, board, setBoard }}
    >
      <div className="flex flex-col w-full relative">
        <Header />
        <div className="overflow-auto">{children}</div>
        <ModalBackGround type={1}>
          <SwitchModeModal />
        </ModalBackGround>
      </div>
    </GlobalContext.Provider>
  );
}
