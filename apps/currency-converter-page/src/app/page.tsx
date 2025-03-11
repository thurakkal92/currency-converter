'use client';

import {
  CurrencyConverterView,
  CurrencyProvider,
} from '@cc-nx-monorepo/currency-converter-view';
import {
  ThemeProvider,
  theme,
  GlobalStyles,
} from '@cc-nx-monorepo/currency-converter-ui';

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CurrencyProvider>
        <CurrencyConverterView />
      </CurrencyProvider>
    </ThemeProvider>
  );
}
