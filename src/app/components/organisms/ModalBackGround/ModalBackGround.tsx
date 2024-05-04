import useData from '@/app/utils/useData';
import React from 'react';

export default function ModalBackGround({ children }: { children: React.ReactNode }) {
  const { AllBoardsModal, setAllBoardModal, mode } = useData();
  return (
    <div className={`w-full h-full absolute ${AllBoardsModal ? 'block' : 'hidden'}`}>
      <div className={`relative h-full w-full flex justify-center items-center `}>
        <div
          className="absolute w-full h-full bg-black opacity-50 z-0"
          onClick={() => {
            setAllBoardModal(false);
          }}
        ></div>
        <div className="z-10 w-full flex justify-center">{children}</div>
      </div>
    </div>
  );
}
