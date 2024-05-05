'use client';
import { useEffect, useState } from 'react';
import AddColumnButton from './components/atoms/AddColumnButton/AddColumnButton';
import useData from './utils/useData';
import { Board } from './data/types';

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
      } h-full flex items-center
       justify-center`}
    >
      {data.length > 0 ? <p>{BoardData?.name}</p> : <AddColumnButton />}
    </div>
  );
}
