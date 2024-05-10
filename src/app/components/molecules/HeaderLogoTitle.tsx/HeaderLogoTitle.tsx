import React from 'react';
import Logo from '../../../icons/Logo/Logo';
import Arrow from '../../atoms/Arrow/Arrow';
import useData from '@/app/utils/useData';
import { motion } from 'framer';
import IconMain from '@/app/icons/IconMain/IconMain';
import { headerType } from '../../organisms/Header/Header';

export default function HeaderLogoTitle({ sideBar, setSideBar }: headerType) {
  const { mode, AllBoardsModal, setAllBoardModal } = useData();
  return (
    <div className="flex items-center justify-center gap-4 md:gap-6 h-full">
      <Logo />
      <div
        className="hidden md:flex items-center justify-center h-full gap-[79px] cursor-pointer"
        onClick={() => setSideBar(!sideBar)}
      >
        <IconMain filling={mode} />
        <div
          className={`h-full w-[1px] opacity-10 ${
            mode ? 'bg-linesDark' : 'bg-linesLight'
          } hidden md:block`}
        ></div>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <h1
          className={`text-lg md:text-xl font-bold ${
            mode ? 'text-NearBlack' : 'text-white'
          }`}
        >
          Platform Launch
        </h1>
        <motion.div
          className="w-8 h-10 flex items-center justify-center cursor-pointer md:hidden"
          onClick={() => setAllBoardModal(!AllBoardsModal)}
          animate={{ rotate: AllBoardsModal ? 180 : 0 }}
          transition={{ type: 'tween' }}
        >
          <Arrow />
        </motion.div>
      </div>
    </div>
  );
}
