export type HeaderProps = {
  mode: boolean;
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
};

import { createContext } from 'react';

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
  id?: number;
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
  sideBar: boolean;
  setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
};

export const GlobalContext = createContext<null | ContextType>(null);
