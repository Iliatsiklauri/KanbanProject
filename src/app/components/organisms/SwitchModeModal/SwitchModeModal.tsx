import useData from '@/app/utils/useData';
import React from 'react';
import ColorSwitch from '../../molecules/ColorSwitch/ColorSwitch';
import { motion } from 'framer';
import Image from 'next/image';

export default function SwitchModeModal() {
  const { data, mode, AllBoardsModal, setAllBoardModal, setMode } = useData();
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
      <div className="self-start w-full pr-6">
        {data?.map((el, i) => (
          <button
            key={i}
            className="flex  items-center justify-start w-full active:bg-MainPurple active:text-white text-MediumGrey pl-6 gap-3 py-[15px] rounded-tr-[100px] rounded-br-[100px]"
          >
            {/* TODO: change image to component so we can toggle the fill atribute on button
              active state */}
            <Image src={'/icon-board.svg'} alt="board" height={16} width={16} />
            <p className={` `}>{el.name}</p>
          </button>
        ))}
      </div>
      <ColorSwitch />
    </motion.div>
  );
}
