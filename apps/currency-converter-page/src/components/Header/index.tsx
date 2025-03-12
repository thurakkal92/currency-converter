import { Box, Icon, Typography } from '@cc-nx-monorepo/currency-converter-ui';
import * as React from 'react';

function Header() {
  return (
    <Box
      as="header"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      py={2}
      backgroundColor="inverse"
    >
      <Box display="flex" alignItems="center">
        <Icon size="lg" icon="globe" />
        <Box as="ul" display="flex" gap={10} px={10}>
          <Typography as="li" color="inverse" variant="body2">
            Personal
          </Typography>
          <Typography as="li" color="inverse" variant="body2">
            Business
          </Typography>
          <Typography as="li" color="inverse" variant="body2">
            Company
          </Typography>
          <Typography as="li" color="inverse" variant="body2">
            About
          </Typography>
        </Box>
      </Box>
      <Typography color="inverse" variant="body2">
        Login/Signup
      </Typography>
    </Box>
  );
}

export { Header };
