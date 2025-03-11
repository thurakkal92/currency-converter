import { ResponsiveProp, Theme } from '../types';

export const getResponsiveStyles = (
  value: ResponsiveProp<any>,
  theme: Theme
) => {
  if (typeof value === 'object') {
    return {
      xs: value.xs !== undefined ? value.xs : undefined,
      sm: value.sm !== undefined ? value.sm : undefined,
      md: value.md !== undefined ? value.md : undefined,
      lg: value.lg !== undefined ? value.lg : undefined,
    };
  }
};
