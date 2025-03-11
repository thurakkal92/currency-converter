import {
  Button,
  Typography,
  Box,
  TextField,
  Select,
  IconButton,
} from '@cc-nx-monorepo/currency-converter-ui';
import { useCurrency } from '../context/CurrencyContext';

export function CurrencyConverterView() {
  const {
    amount,
    setAmount,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    convertedAmount,
    convertCurrency,
    currencies,
    swapCurrencies,
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
    <Box display="flex" flexDirection="column" justifyContent="space-between">
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
          min={1}
          tabIndex={0}
          type="number"
          onChange={handleAmountChange}
          placeholder="Amount"
          label="Base amount"
        />

        <Select
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
        />
        <Box
          display={{ xs: 'none', md: 'block' }}
          margin="0 -24px 12px -24px"
          position="relative"
          zIndex={10}
        >
          <IconButton onClick={swapCurrencies} icon="arrowRightLeft" />
        </Box>
        <Select
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
        />
      </Box>
      <Box py={3} />
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <div>
          {convertedAmount ? (
            <>
              <Typography variant="h6" color="subtle">
                {amount} {fromCurrency.currencyName} =
              </Typography>
              <Typography variant="h1" color="info">
                {convertedAmount}{' '}
                <Typography as="span" variant="h3" color="subtle">
                  {toCurrency.currencyName}
                </Typography>
              </Typography>
              <Typography variant="caption" color="default">
                1 {fromCurrency.currency} ={' '}
                {(convertedAmount / amount).toFixed(2)} {toCurrency.currency}
              </Typography>
            </>
          ) : (
            ''
          )}
        </div>
        <Box textAlign="right">
          {convertedAmount ? (
            <Typography as="div" variant="caption" color="subtle">
              <Typography variant="caption" as="span" color="info">
                {fromCurrency.currencyName}
              </Typography>{' '}
              to{' '}
              <Typography variant="caption" as="span" color="info">
                {toCurrency.currencyName}
              </Typography>{' '}
              conversion — Last updated Mar 11, 2025, 01:39 UTC
            </Typography>
          ) : (
            ''
          )}

          <Box py={0.5} />
          <Box
            width={{ xs: '100%', sm: 200 }}
            display="inline-flex"
            justifyContent="flex-end"
          >
            <Button fullWidth variant="default" onClick={convertCurrency}>
              Convert currency
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CurrencyConverterView;
