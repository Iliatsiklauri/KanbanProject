import useData from '@/app/utils/useData';
import React from 'react';
import AllBoardModalSection from '../../atoms/AllBoardsModalSection/AllBoardModalSection';
import AddBoardSection from '../../atoms/AddBoardSection/AddBoardSection';

export default function BoardTitles() {
  const { data } = useData();
  return (
    <div className="self-start w-full pr-6 ">
      {data?.map((el, i) => (
        <AllBoardModalSection el={el} i={i} key={i} />
      ))}
      <AddBoardSection />
    </div>
  );
}
