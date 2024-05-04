import React from 'react';
import AddTaskButton from '../../atoms/AddButton/AddButton';
import EditBoardButton from '../../atoms/EditBoardButton/EditBoardButton';

export default function EditAddBoard() {
  return (
    <div className="flex items-center justify-center gap-4">
      <AddTaskButton />
      <EditBoardButton />
    </div>
  );
}
