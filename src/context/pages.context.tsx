import React, { createContext } from 'react';

export type PagesState = {
  firstPage: number;
  lastPage: number;
  inBatch: number;
  emptyPage: number;
  isDoubleSided: boolean;
};

type PagesProviderState = {
  setValues: (e: PagesState) => void;
} & PagesState;

const initialState: PagesProviderState = {
  firstPage: 1,
  lastPage: 16,
  inBatch: 16,
  emptyPage: 1,
  isDoubleSided: false,
  setValues: () => {},
};

const PagesContext = createContext<PagesProviderState>(initialState);

export const PagesProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [values, setValues] = React.useState<PagesState>(initialState);

  return <PagesContext.Provider value={{ ...values, setValues }}>{children}</PagesContext.Provider>;
};

export const usePagesContext = () => {
  const context = React.useContext(PagesContext);
  if (context === undefined) {
    throw new Error('usePagesContext must be used within a PagesProvider');
  }
  return context;
};
