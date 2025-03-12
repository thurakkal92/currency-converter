import { XAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

import { MONTHLY_RATES } from '../../constants';
import { useCurrency } from '../../context/CurrencyContext';
import { Box, Typography } from '@cc-nx-monorepo/currency-converter-ui';

function RatesChart() {
  const { amount, fromCurrency, toCurrency, convertedAmount } = useCurrency();

  return (
    <Box backgroundColor="paper">
      <Typography variant="h2" as="h2" align="center">
        {fromCurrency.currency} to {toCurrency.currency} monthly chart
      </Typography>
      <Box py={4} />
      <Box borderRadius={4} backgroundColor="default" padding={6}>
        {/* <Box py={10} /> */}
        <Typography color="bold" variant="h3" as="h3">
          1 {fromCurrency.currency} ={' '}
          {(convertedAmount / amount).toFixed(4) || toCurrency.rate}{' '}
          {toCurrency.currency}
        </Typography>
        {convertedAmount ? (
          <Typography as="div" variant="body2">
            {toCurrency.symbol}
            {(1 / convertedAmount).toFixed(6)} &nbsp;
            <Typography variant="body2" as="span" color="success">
              +15%
            </Typography>
          </Typography>
        ) : null}

        <Box py={2} />

        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            data={MONTHLY_RATES}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="oklch(0.443 0.11 240.79)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="oklch(0.901 0.058 230.902)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <Tooltip />

            <XAxis
              tick={{
                fontSize: 12,
                color: '#64748b',
              }}
              tickLine={{ display: 'none' }}
              axisLine={{ strokeWidth: 0.5 }}
              dataKey="date"
            />

            <Tooltip />
            <Area
              strokeWidth={1}
              type="monotone"
              dataKey="rate"
              stroke="oklch(0.443 0.11 240.79)"
              fillOpacity={1}
              fill="url(#colorGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
}

export { RatesChart };
