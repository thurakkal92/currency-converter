import { Box, Typography } from '@cc-nx-monorepo/currency-converter-ui';
import { CurrencyConverter } from '@cc-nx-monorepo/currency-converter-view';
import * as React from 'react';

function Hero() {
  return (
    <Box as="main">
      <Box py={6} />
      <Typography color="inverse" align="center" variant="h1" as="h1">
        Currency converter
      </Typography>
      <Typography align="center" as="p" variant="subtitle2" color="inverse">
        Check live foreign currency exchange rates
      </Typography>
      <Box py={4} />
      <Box
        padding={6}
        position="relative"
        zIndex={10}
        boxShadow="lg"
        borderRadius={6}
        backgroundColor="paper"
      >
        <CurrencyConverter />
      </Box>
    </Box>
  );
}

export { Hero };
