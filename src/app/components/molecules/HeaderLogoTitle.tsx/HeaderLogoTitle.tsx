import React from 'react';
import Logo from '../../../icons/Logo/Logo';
import Arrow from '../../atoms/Arrow/Arrow';
import useData from '@/app/utils/useData';
import { motion } from 'framer';

export default function HeaderLogoTitle() {
  const { mode, AllBoardsModal, setAllBoardModal } = useData();
  return (
    <div className="flex items-center justify-center gap-4">
      <Logo />
      <div className="flex gap-2 items-center justify-center">
        <h1 className={`text-lg font-bold ${mode ? 'text-NearBlack' : 'text-white'}`}>
          Platform Launch
        </h1>
        <motion.div
          className="w-8 h-10 flex items-center justify-center cursor-pointer"
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
