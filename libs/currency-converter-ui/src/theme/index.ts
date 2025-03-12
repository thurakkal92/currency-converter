import { Theme } from '../types';
import { colors } from './colors';

export const theme: Theme = {
  mode: 'light',
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
  },
  colors: {
    text: {
      default: colors.slate[700],
      bold: colors.slate[900],
      subtle: colors.slate[500],
      inverse: colors.slate[50],
      error: colors.red[500],
      info: colors.blue[700],
      success: colors.green[500],
      warning: colors.yellow[500],
      light: colors.common.white,
      dark: colors.common.dark,
    },
    background: {
      default: colors.slate[100],
      paper: colors.common.white,
      inverse: colors.slate[900],
    },
    border: {
      default: colors.slate[200],
      subtle: colors.slate[100],
      medium: colors.slate[300],
      bold: colors.slate[600],
      hover: colors.slate[700],
      selected: colors.slate[700],
    },
    brand: {
      default: colors.slate[700],
      medium: colors.slate[500],
      subtle: colors.slate[100],
      bold: colors.slate[900],
    },
    semantic: {
      error: colors.red[500],
      info: colors.blue[700],
      success: colors.green[500],
      warning: colors.yellow[500],
    },
    overlay: {
      neutral: {
        subtle: `${colors.slate[900]}14`,
        medium: `${colors.slate[900]}29`,
        bold: `${colors.slate[900]}4d`,
      },
    },
  },
  typography: {
    h1: { fontSize: '2.5rem', fontWeight: 400, lineHeight: 1.2 },
    h2: { fontSize: '2rem', fontWeight: 500, lineHeight: 1.3 },
    h3: { fontSize: '1.75rem', fontWeight: 600, lineHeight: 1.4 },
    h4: { fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.5 },
    h5: { fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.6 },
    h6: { fontSize: '1rem', fontWeight: 500, lineHeight: 1.7 },
    subtitle1: { fontSize: '1.5rem', fontWeight: 500, lineHeight: 1.75 },
    subtitle2: { fontSize: '1rem', fontWeight: 500, lineHeight: 1.75 },
    body1: { fontSize: '1.5rem', fontWeight: 400, lineHeight: 1.5 },
    body2: { fontSize: '1rem', fontWeight: 400, lineHeight: 1.5 },
    caption: { fontSize: '0.75rem', fontWeight: 400, lineHeight: 1.5 },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      lineHeight: 2,
      textTransform: 'uppercase',
    },
  },
  zIndex: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
  size: (value: any) => {
    const values = [].concat(value);
    return values
      .map((v) => (typeof v === 'string' ? v : `${v * 4}px`))
      .join(' ');
  },
  boxShadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    default:
      '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
    none: 'none',
  },
};

export default theme;
