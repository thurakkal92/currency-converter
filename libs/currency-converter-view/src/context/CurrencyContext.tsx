import React, { createContext, useContext } from 'react';
import useCurrencyConverter from '../hooks/useCurrencyConverter';
import { CurrencyContextType } from '../types';

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined
);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const currencyConverter = useCurrencyConverter();

  return (
    <CurrencyContext.Provider value={currencyConverter}>
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
