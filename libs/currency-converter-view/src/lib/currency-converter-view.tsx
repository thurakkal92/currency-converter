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

  return (
    <>
      <Box py={5} />
      <Box
        boxShadow="xl"
        borderRadius={4}
        padding={6}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        // border="medium"
        margin="0 auto"
        maxWidth={1200}
      >
        <Typography color="bold" variant="h1" as="h1">
          Currency converter
        </Typography>
        <Typography variant="subtitle1" color="subtle">
          Check live foreign currency exchange rates
        </Typography>
        <Box py={3} />

        <Box display="flex" gap={2} alignItems="flex-end">
          <TextField
            fullWidth
            startAdornment={fromCurrency.symbol}
            value={amount}
            min={1}
            tabIndex={0}
            type="number"
            // fullWidth
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
            placeholder="From"
            fullWidth
            options={currencies}
            label="From"
          />
          <Box margin="0 -24px 12px -24px" position="relative" zIndex={10}>
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
        <Box display="flex" justifyContent="space-between">
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
            <Button variant="default" onClick={convertCurrency}>
              Convert your currency
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CurrencyConverterView;
