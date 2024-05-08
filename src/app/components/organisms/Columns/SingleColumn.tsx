import { Column } from '@/app/data/types';
import React from 'react';
import SingleColumnSection from '../../molecules/SingleColumnSection/SingleColumnSection';
import useData from '@/app/utils/useData';

export default function SingleColumn({ name, tasks, id }: Column) {
  const { data } = useData();
  return (
    <div className="flex flex-col items-start justify-center gap-6">
      <header className="flex items-center justify-center gap-3">
        {data.length === Number(id) + 1 ? (
          <div className="bg-[#67E2AE] h-[15px] w-[15px] rounded-full"></div>
        ) : data.length === Number(id) + 2 ? (
          <div className="bg-[#8471F2] h-[15px] w-[15px] rounded-full"></div>
        ) : data.length === Number(id) + 3 ? (
          <div className="bg-[#49C4E5] h-[15px] w-[15px] rounded-full"></div>
        ) : (
          <div className="bg-red h-[15px] w-[15px] rounded-full"></div>
        )}
        <h2 className="text-MediumGrey text-[12px] font-bold">
          {name} ({tasks.length})
        </h2>
      </header>
      <main className="flex flex-col items-center gap-[20px] justify-center w-[280px]">
        {tasks.map((el, key) => (
          <SingleColumnSection
            key={key}
            description={`${el.description}`}
            status={`${el.description}`}
            subtasks={el.subtasks}
            title={`${el.title}`}
          />
        ))}
      </main>
    </div>
  );
}
