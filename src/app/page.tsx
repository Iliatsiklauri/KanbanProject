'use client';
import { useEffect, useState } from 'react';
import useData from './utils/useData';
import { Board } from './data/types';
import SingleColumn from './components/organisms/Columns/SingleColumn';
import AddColumnButton from './components/atoms/AddColumnButton/AddColumnButton';
import SideBar from './components/organisms/SideBar/SideBar';

export default function Page() {
  const { data, mode, board, sideBar } = useData();
  const [BoardData, setBoardData] = useState<null | Board>(null);
  useEffect(() => {
    let filteredData = data.filter((el) => el.name === board);
    setBoardData(filteredData[0]);
  }, [board]);

  return (
    <div
      className={`flex w-full ${
        data.length > 0 ? 'items-start justify-start' : 'items-center justify-between'
      } `}
    >
      <SideBar />

      {data.length > 0 ? (
        <div className="flex items-start justify-start gap-6 px-4 md:px-6 py-6 overflow-auto">
          {BoardData?.columns.map((el, i) => (
            <SingleColumn name={`${el.name}`} tasks={el.tasks} key={i} id={i} />
          ))}
        </div>
      ) : null}
      {data.length == 0 ? <AddColumnButton /> : null}
    </div>
  );
}
