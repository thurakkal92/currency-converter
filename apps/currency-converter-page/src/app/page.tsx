'use client';

import {
  CurrencyProvider,
  RatesChart,
} from '@cc-nx-monorepo/currency-converter-view';
import {
  ThemeProvider,
  theme,
  GlobalStyles,
  Box,
  Container,
} from '@cc-nx-monorepo/currency-converter-ui';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CurrencyProvider>
        <Box backgroundColor="inverse" maxHeight={350}>
          <Container>
            <Header />
            <Hero />
            <Box py={10} />
            <RatesChart />
          </Container>
        </Box>
        <footer></footer>
      </CurrencyProvider>
    </ThemeProvider>
  );
}
