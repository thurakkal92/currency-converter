'use client';

import {
  CurrencyConverterView,
  CurrencyProvider,
} from '@cc-nx-monorepo/currency-converter-view';
import {
  ThemeProvider,
  theme,
  GlobalStyles,
  Typography,
  Box,
} from '@cc-nx-monorepo/currency-converter-ui';

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CurrencyProvider>
        <Box maxWidth={1200} px={2} margin="0 auto">
          <Box py={6} />
          <Box padding={6} boxShadow="lg" borderRadius={6}>
            <Typography color="bold" variant="h1" as="h1">
              Currency converter
            </Typography>
            <Typography variant="subtitle1" color="subtle">
              Check live foreign currency exchange rates
            </Typography>
            <Box py={4} />
            <CurrencyConverterView />
          </Box>
        </Box>
      </CurrencyProvider>
    </ThemeProvider>
  );
}
