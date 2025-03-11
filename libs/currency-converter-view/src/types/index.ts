export interface Currency {
  country: string;
  currency: string;
  rate: number;
  countryCode: string;
  symbol: string;
  currencyName: string;
}

export interface CurrencyContextType {
  amount: number;
  setAmount: (amount: number) => void;
  fromCurrency: Currency;
  setFromCurrency: (currency: Currency) => void;
  toCurrency: Currency;
  setToCurrency: (currency: Currency) => void;
  convertedAmount: number;
  convertCurrency: () => void;
  swapCurrencies: () => void;
  currencies: Currency[];
}
