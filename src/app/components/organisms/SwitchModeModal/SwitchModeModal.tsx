import useData from '@/app/utils/useData';
import React from 'react';
import ColorSwitch from '../../molecules/ColorSwitch/ColorSwitch';
import { motion } from 'framer';
import BoardsCount from '../../atoms/BoardsCount/BoardsCount';
import AllBoardModalSection from '../../atoms/AllBoardsModalSection/AllBoardModalSection';
import AddBoardSection from '../../atoms/AddBoardSection/AddBoardSection';

export default function SwitchModeModal() {
  const { data, mode, AllBoardsModal } = useData();

  return (
    <motion.div
      animate={{
        y: AllBoardsModal ? 0 : -300,
        opacity: AllBoardsModal ? 1 : 0,
      }}
      transition={{ type: 'spring', damping: 20 }}
      className={`${
        mode ? 'bg-white' : 'bg-DarkGrey'
      } min-w-[264px] w-[50%] py-4 shadow-[0_10px_20px_0_rgba(54,78,126,0.25)] rounded-lg flex items-center justify-center flex-col gap-4`}
    >
      <BoardsCount />
      <div className="self-start w-full pr-6 ">
        {data?.map((el, i) => (
          <AllBoardModalSection el={el} i={i} key={i} />
        ))}
        <AddBoardSection />
      </div>

      <ColorSwitch />
    </motion.div>
  );
}
