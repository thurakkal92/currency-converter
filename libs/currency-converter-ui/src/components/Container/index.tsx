import styled from '@emotion/styled';

const Container = styled('div')(({ theme }) => ({
  maxWidth: 1200,
  width: '100%',
  margin: '0 auto',
  padding: `0 ${theme.size(4)}`, // Default padding for small screens

  // Responsive adjustments
  [`@media (min-width: ${theme.breakpoints.xs})`]: {
    padding: `0 ${theme.size(2)}`,
  },
  [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
    padding: `0 ${theme.size(4)}`,
  },
  [`@media (min-width: ${theme.breakpoints.md}px)`]: {
    padding: `0 ${theme.size(4)}`,
  },
  [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
    padding: `0 ${theme.size(4)}`,
  },
}));

export { Container };
