import { useContext } from 'react';
import { GlobalContext } from '../data/types';

export default function useData() {
  const context = useContext(GlobalContext);
  if (!context) throw new Error('useData must be used within a GlobalContextProvider');

  return context;
}
