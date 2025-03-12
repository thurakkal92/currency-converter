import { useEffect, useState } from 'react';
import { Currency } from '../types';

const useCurrencyConverter = (currencies: Currency[]) => {
  const [amount, setAmount] = useState<number>(100);
  const [fromCurrency, setFromCurrency] = useState<Currency>(currencies[0]);
  const [toCurrency, setToCurrency] = useState<Currency>(currencies[1]);
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
    currencies,
  };
};

export default useCurrencyConverter;
