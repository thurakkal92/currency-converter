import React, { createContext, useContext } from 'react';
import useCurrencyConverter from '../hooks/useCurrencyConverter';
import { Currency, CurrencyContextType } from '../types';
import { CURRENCIES } from '../constants';

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined
);

export function CurrencyProvider({
  children,
  currencies,
}: {
  children: React.ReactNode;
  currencies?: Currency[];
}) {
  if (currencies && currencies.length === 0) {
    throw new Error('CurrencyProvider requires at least one currency.');
  }

  const validCurrencies = currencies ?? CURRENCIES;

  const currencyConverter = useCurrencyConverter(validCurrencies);

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
