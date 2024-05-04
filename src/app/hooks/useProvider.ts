import { useContext } from 'react';
import { ContextType, GlobalContext } from '../data/types';

export default function useProvider() {
  const context = useContext(GlobalContext);
  if (!context) return null;
  const { data } = context as ContextType;
  return { data };
}
