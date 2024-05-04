'use client';
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

export type Boards = {
  boards: Board[];
};
export type ContextType = {
  data: Boards;
  mode: boolean;
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export type HeaderProps = {
  sidebar: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

export const GlobalContext = createContext<null | ContextType>(null);
