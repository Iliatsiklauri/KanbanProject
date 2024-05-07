'use client';
import { useEffect, useState } from 'react';
import useData from './utils/useData';
import { Board } from './data/types';
import SingleColumn from './components/organisms/Columns/SingleColumn';

export default function Page() {
  const { data, mode, board } = useData();
  const [BoardData, setBoardData] = useState<null | Board>(null);
  useEffect(() => {
    let filteredData = data.filter((el) => el.name === board);
    setBoardData(filteredData[0]);
  }, [board]);
  return (
    <div
      className={`${
        mode ? 'bg-lightGreylightBg' : 'bg-veryDarkGreyDarkBg'
      } min-h-screen flex items-start w-full
       justify-start`}
    >
      <div className="flex items-start justify-start gap-6 px-4 py-6">
        {BoardData?.columns.map((el, i) => (
          <SingleColumn name={`${el.name}`} tasks={el.tasks} key={i} />
        ))}
      </div>
    </div>
  );
}
