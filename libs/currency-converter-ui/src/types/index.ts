// Typography Type
export interface TypographyStyle {
  fontSize: string;
  fontWeight: number;
  lineHeight: number;
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
}

// Define the Theme Type
export interface Theme {
  mode: 'light' | 'dark';
  breakpoints: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
  };
  colors: {
    text: {
      default: string;
      bold: string;
      subtle: string;
      inverse: string;
      error: string;
      info: string;
      success: string;
      warning: string;
      light: string;
      dark: string;
    };
    background: {
      default: string;
      paper: string;
      inverse: string;
    };
    border: {
      default: string;
      subtle: string;
      medium: string;
      bold: string;
      hover: string;
      selected: string;
    };
    brand: {
      default: string;
      medium: string;
      subtle: string;
      bold: string;
    };
    semantic: {
      error: string;
      info: string;
      success: string;
      warning: string;
    };
    overlay: {
      neutral: {
        subtle: string;
        medium: string;
        bold: string;
      };
    };
  };
  typography: {
    h1: TypographyStyle;
    h2: TypographyStyle;
    h3: TypographyStyle;
    h4: TypographyStyle;
    h5: TypographyStyle;
    h6: TypographyStyle;
    subtitle1: TypographyStyle;
    subtitle2: TypographyStyle;
    body1: TypographyStyle;
    body2: TypographyStyle;
    caption: TypographyStyle;
    overline: TypographyStyle;
  };
  zIndex: number[];
  size: (value: number | string) => string;
  boxShadow: {
    sm: string;
    default: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    inner: string;
    none: string;
  };
}

export type ResponsiveProp<T> =
  | T
  | {
      xs?: T;
      sm?: T;
      md?: T;
      lg?: T;
      xl?: T;
    };
