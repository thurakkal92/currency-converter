import { Button, Typography, Box } from '@cc-nx-monorepo/currency-converter-ui';
import { useCurrency } from '../../context/CurrencyContext';
import { OutputView } from './OutputView';
import { InputView } from './InputView';

export function CurrencyConverter() {
  const { fromCurrency, toCurrency, convertedAmount, convertCurrency } =
    useCurrency();

  function handleKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
      convertCurrency();
    }
  }

  return (
    <Box display="flex" flexDirection="column" justifyContent="space-between">
      <InputView />
      <Box py={3} />
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <div>
          <OutputView />
        </div>
        <Box textAlign="right">
          {convertedAmount ? (
            <Typography as="div" variant="caption" color="subtle">
              <Typography variant="caption" as="span" color="info">
                {fromCurrency.currencyName}
              </Typography>
              &nbsp;to&nbsp;
              <Typography variant="caption" as="span" color="info">
                {toCurrency.currencyName}
              </Typography>
              &nbsp;conversion — Last updated Mar 11, 2025, 01:39 UTC
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
            <Button
              fullWidth
              variant="default"
              onKeyDown={handleKeyDown}
              onClick={convertCurrency}
            >
              Convert currency
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
