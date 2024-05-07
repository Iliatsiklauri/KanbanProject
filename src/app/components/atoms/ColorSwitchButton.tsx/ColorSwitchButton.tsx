import useData from '@/app/utils/useData';
import { motion } from 'framer';
import React from 'react';

export default function ColorSwitchButton() {
  const { mode, setMode } = useData();
  return (
    <div
      className="w-10 h-5 bg-MainPurple rounded-[300px] px-[3px] py-[3px] cursor-pointer wrapper"
      onClick={() => {
        setMode(!mode);
      }}
    >
      <motion.div
        className="bg-white h-full w-[16px] rounded-full input"
        initial={{ x: 0 }}
        animate={{ x: mode ? 23 : 0 }}
        transition={{ type: 'tween' }}
      ></motion.div>
    </div>
  );
}
