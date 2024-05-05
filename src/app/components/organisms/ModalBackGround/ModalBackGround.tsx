import useData from '@/app/utils/useData';
import React from 'react';

export default function ModalBackGround({
  children,
  type,
}: {
  children: React.ReactNode;
  type?: number;
}) {
  const { AllBoardsModal, setAllBoardModal } = useData();
  return (
    <div className={`w-full h-full absolute ${AllBoardsModal ? 'block' : 'hidden'}`}>
      <div className={`relative h-full w-full flex justify-start items-center `}>
        <div
          className="absolute w-full h-full bg-black opacity-50 z-0"
          onClick={() => {
            setAllBoardModal(false);
          }}
        ></div>
        <div className={`z-10 w-fit mx-auto ${type === 1 ? 'self-start mt-20' : ''}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
