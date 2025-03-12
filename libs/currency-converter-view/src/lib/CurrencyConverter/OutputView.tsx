import { useCurrency } from '../../context/CurrencyContext';
import { Typography } from '@cc-nx-monorepo/currency-converter-ui';

function OutputView() {
  const { amount, fromCurrency, toCurrency, convertedAmount } = useCurrency();

  if (convertedAmount) {
    return (
      <div>
        <Typography variant="h6" color="subtle">
          {amount} {fromCurrency.currencyName} =
        </Typography>
        <Typography variant="h1" role="heading" color="bold">
          {convertedAmount}&nbsp;
          <Typography as="span" variant="h1" color="subtle">
            {toCurrency.currencyName}
          </Typography>
        </Typography>
        <Typography
          aria-label={`Exchange rate: 1 ${fromCurrency.currency} equals ${(
            convertedAmount / amount
          ).toFixed(2)} ${toCurrency.currency}`}
          variant="caption"
          color="default"
        >
          1 {fromCurrency.currency} = {(convertedAmount / amount).toFixed(2)}{' '}
          {toCurrency.currency}
        </Typography>
      </div>
    );
  }
}

export { OutputView };
