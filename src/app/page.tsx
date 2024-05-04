'use client';
import AddColumn from './components/atoms/AddColumn/AddColumn';
import useData from './utils/useData';

export default function Page() {
  const { data, mode } = useData();
  return (
    <div
      className={`${
        mode ? 'bg-lightGreylightBg' : 'bg-veryDarkGreyDarkBg'
      } h-full flex items-center
       justify-center`}
    >
      <AddColumn />
    </div>
  );
}
