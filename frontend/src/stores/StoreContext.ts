import {
  createContext,
  useContext,
} from 'react';
import { experimentFormStore } from './ExperimentFormStore';

export const rootStore = {
  experimentFormStore,
};

export const StoreContext = createContext(rootStore);

export const useStoreContext = () => { return useContext(StoreContext) };