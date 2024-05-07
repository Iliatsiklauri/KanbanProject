import { Task } from '@/app/data/types';
import useData from '@/app/utils/useData';
import React from 'react';

export default function SingleColumnSection({
  description,
  status,
  subtasks,
  title,
}: Task) {
  const { mode } = useData();
  return (
    <div
      className={`w-full  rounded-lg px-4 py-[21px] flex flex-col gap-[6px] items-start justify-center shadow-[0_px_4px_6px_0px_rgba(54, 78, 126, 0.10)] ${
        mode ? 'bg-white' : 'bg-DarkGrey'
      } cursor-pointer`}
    >
      <p className={`${!mode ? 'text-white' : 'text-NearBlack'} text-[15px] font-bold`}>
        {title}
      </p>
      <p className="text-[12px] text-MediumGrey font-bold">
        0 of {subtasks.length} subtasks
      </p>
    </div>
  );
}
