import {
  Box,
  IconButton,
  Select,
  TextField,
} from '@cc-nx-monorepo/currency-converter-ui';
import * as React from 'react';
import { useCurrency } from '../../context/CurrencyContext';

function InputView() {
  const {
    amount,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    currencies,
    swapCurrencies,
    setAmount,
    convertCurrency,
  } = useCurrency();

  function handleAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e?.target?.value ? Number(e.target.value) : amount;
    if (!isNaN(value)) setAmount(value);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
      convertCurrency();
    }
  }
  return (
    <Box
      display="flex"
      gap={2}
      flexWrap={{ xs: 'wrap', md: 'unset' }}
      alignItems="flex-end"
    >
      <TextField
        fullWidth
        name="amount"
        startAdornment={fromCurrency.symbol}
        value={amount}
        tabIndex={0}
        type="number"
        onChange={handleAmountChange}
        placeholder="Amount"
        label="Base amount"
        aria-label="Enter base amount for conversion"
        aria-required="true"
        onKeyDown={handleKeyDown}
      />

      <Select
        id="select-from-currency"
        startAdornment={
          <img
            src={`https://flagcdn.com/${fromCurrency.countryCode.toLocaleLowerCase()}.svg`}
            alt={`flag-${fromCurrency.country}`}
            style={{ objectFit: 'cover' }}
          />
        }
        selectedItemLabel={`${fromCurrency.currency} - ${fromCurrency.currencyName}`}
        onMenuItemSelect={(selectedOption: any) =>
          setFromCurrency(selectedOption)
        }
        fullWidth
        options={currencies}
        label="From"
        aria-label="Select currency to convert from"
      />
      <Box
        display={{ xs: 'none', md: 'block' }}
        margin="0 -24px 12px -24px"
        position="relative"
        zIndex={10}
      >
        <IconButton
          aria-label="Swap currencies"
          onClick={swapCurrencies}
          icon="arrowRightLeft"
          role="button"
          title="Swap currencies"
        />
      </Box>
      <Select
        id="select-from-currency"
        startAdornment={
          <img
            src={`https://flagcdn.com/${toCurrency.countryCode.toLocaleLowerCase()}.svg`}
            alt={`flag-${toCurrency.country}`}
            style={{ objectFit: 'cover' }}
          />
        }
        selectedItemLabel={`${toCurrency.currency} - ${toCurrency.currencyName}`}
        onMenuItemSelect={(selectedOption: any) =>
          setToCurrency(selectedOption)
        }
        fullWidth
        options={currencies}
        label="To"
        aria-label="Select currency to convert to"
      />
    </Box>
  );
}

export { InputView };
