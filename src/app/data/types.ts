export type HeaderProps = {
  mode: boolean;
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
};

import { createContext, useState } from 'react';

export type Subtask = {
  title: string;
  isCompleted: boolean;
};

export type Task = {
  title: string;
  description: string;
  status: string;
  subtasks: Subtask[];
};

export type Column = {
  name: string;
  tasks: Task[];
};

export type Board = {
  name: string;
  columns: Column[];
};

export type ContextType = {
  data: Board[];
  mode: boolean;
  AllBoardsModal: boolean;
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
  setAllBoardModal: React.Dispatch<React.SetStateAction<boolean>>;
  board: string | null;
  setBoard: React.Dispatch<React.SetStateAction<string | null>>;
};

export const GlobalContext = createContext<null | ContextType>(null);
