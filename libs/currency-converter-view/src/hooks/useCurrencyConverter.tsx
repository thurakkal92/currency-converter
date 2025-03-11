import { useEffect, useState } from 'react';
import { CURRENCIES } from '../constants';
import { Currency } from '../types';

const useCurrencyConverter = () => {
  const [amount, setAmount] = useState<number>(100);
  const [fromCurrency, setFromCurrency] = useState<Currency>(CURRENCIES[0]);
  const [toCurrency, setToCurrency] = useState<Currency>(CURRENCIES[1]);
  const [convertedAmount, setConvertedAmount] = useState<number>(0);

  useEffect(() => {
    if (convertedAmount > 0) convertCurrency();
  }, [amount, fromCurrency, toCurrency]);

  const convertCurrency = () => {
    const result = (amount / fromCurrency.rate) * toCurrency.rate;
    setConvertedAmount(parseFloat(result.toFixed(2)));
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(convertedAmount);
  };

  return {
    amount,
    setAmount,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    convertedAmount,
    convertCurrency,
    swapCurrencies,
    currencies: CURRENCIES,
  };
};

export default useCurrencyConverter;
