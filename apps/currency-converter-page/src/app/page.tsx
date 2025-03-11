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
  Icon,
  Button,
} from '@cc-nx-monorepo/currency-converter-ui';

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CurrencyProvider>
        <Box>
          <Box
            position="absolute"
            zIndex={-1}
            backgroundColor="inverse"
            width="100%"
            height="350px"
          ></Box>
          <Box maxWidth={1200} px={2} margin="0 auto">
            <Box
              as="header"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              py={2}
            >
              <Box display="flex" alignItems="center">
                <Icon size="lg" icon="globe" />
                <Box display="flex" gap={10} px={10}>
                  <Typography color="light" variant="body2">
                    Personal
                  </Typography>
                  <Typography color="light" variant="body2">
                    Business
                  </Typography>
                  <Typography color="light" variant="body2">
                    Company
                  </Typography>
                  <Typography color="light" variant="body2">
                    About
                  </Typography>
                </Box>
              </Box>
              <Typography color="light" variant="body2">
                Login/Signup
              </Typography>
            </Box>
            <Box as="main">
              <Box py={6} />
              <Typography color="light" align="center" variant="h1" as="h1">
                Currency converter
              </Typography>
              <Typography align="center" variant="subtitle2" color="light">
                Check live foreign currency exchange rates
              </Typography>
              <Box py={4} />
              <Box
                // minHeight={270}
                padding={6}
                position="relative"
                zIndex={10}
                boxShadow="lg"
                borderRadius={6}
                backgroundColor="paper"
              >
                <CurrencyConverterView />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          maxWidth="1200px"
          margin="0 auto"
          as="section"
          zIndex={0}
          position="relative"
          py={10}
        >
          {/* <Box padding={4} borderTop="default" borderBottom="default"></Box> */}
        </Box>
        <footer></footer>
      </CurrencyProvider>
    </ThemeProvider>
  );
}
