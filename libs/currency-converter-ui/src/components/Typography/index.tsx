import styled from '@emotion/styled';
import React from 'react';
import { useTheme } from '@emotion/react';
import { theme } from '../../theme';

type Variant = keyof typeof theme.typography;

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: Variant;
  as?: React.ElementType;
  color?:
    | 'light'
    | 'dark'
    | 'default'
    | 'subtle'
    | 'bold'
    | 'success'
    | 'error'
    | 'info'
    | 'inverse'
    | 'warning';
  align?: 'left' | 'center' | 'right' | 'justify';
}

const StyledTypography = styled('p')<TypographyProps>(
  ({ variant = 'body1', align, theme, color }) => {
    const baseStyle = theme.typography[variant];
    const getColor = () => {
      if (!color) return theme.colors.text.bold;
      return theme.colors.text[color] || theme.colors.text.bold;
    };

    return {
      fontSize: baseStyle.fontSize,
      fontWeight: baseStyle.fontWeight,
      lineHeight: baseStyle.lineHeight,
      textTransform: baseStyle.textTransform || 'none',
      color: getColor(),
      textAlign: align || 'left',
    };
  }
);

function Typography(props: TypographyProps) {
  const { as, variant = 'body1', children, color, ...otherProps } = props;

  const theme = useTheme();

  // Default HTML elements for each variant
  const variantToElement: Record<Variant, React.ElementType> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
    caption: 'span',
    overline: 'span',
  };

  const Component = as || variantToElement[variant] || 'p';

  return (
    <StyledTypography
      as={Component}
      variant={variant}
      theme={theme}
      color={color}
      {...otherProps}
    >
      {children}
    </StyledTypography>
  );
}

export { Typography };
