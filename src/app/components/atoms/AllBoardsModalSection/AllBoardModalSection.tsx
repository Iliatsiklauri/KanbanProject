import { Board } from '@/app/data/types';
import React from 'react';
import useData from '@/app/utils/useData';
import IconBoard from '@/app/components/atoms/IconBoard/IconBoard';

export default function AllBoardModalSection({ el, i }: { el: Board; i: number }) {
  const { setBoard, board } = useData();
  return (
    <button
      key={i}
      className={`flex  items-center justify-start w-full  text-MediumGrey pl-6 gap-3 py-[15px] rounded-tr-[100px] rounded-br-[100px] ${
        el.name === board ? 'bg-MainPurple text-white' : ''
      }`}
      onClick={() => {
        setBoard(el.name);
      }}
    >
      {el.name === board ? <IconBoard fill /> : <IconBoard />}
      <p className={`font-bold text-[15px]`}>{el.name}</p>
    </button>
  );
}
