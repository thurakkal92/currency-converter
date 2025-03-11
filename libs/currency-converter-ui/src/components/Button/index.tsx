import styled from '@emotion/styled';
import React, { ButtonHTMLAttributes } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  variant?: 'default';
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const StyledButton = styled('button')<IProps>(
  ({ theme, variant = 'default', fullWidth }) => {
    const sizeStyles = theme.typography.body2;

    return {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.size(8),
      fontSize: sizeStyles.fontSize,
      paddingRight: theme.size(7),
      paddingLeft: theme.size(7),
      paddingTop: theme.size(3),
      paddingBottom: theme.size(3),
      fontWeight: sizeStyles.fontWeight,
      textTransform: sizeStyles.textTransform,
      cursor: 'pointer',
      width: fullWidth ? '100%' : 'auto',
      transition: 'all 0.3s ease-in-out',
      whiteSpace: 'nowrap',
      maxHeight: theme.size(12),
      backgroundColor:
        variant === 'default' ? theme.colors.brand.bold : 'transparent',
      color: variant === 'default' ? '#fff' : '',
      '&:hover': {
        backgroundColor:
          variant === 'default' ? theme.colors.brand.default : 'transparent',
      },
      '&:disabled': {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    };
  }
);

function Button(props: IProps) {
  const { variant, fullWidth, startIcon, endIcon, children, ...otherProps } =
    props;
  return (
    <StyledButton fullWidth={fullWidth} variant={variant} {...otherProps}>
      {startIcon && <span>{startIcon}&nbsp;</span>}
      {children}
      {startIcon && <span>{startIcon}&nbsp;</span>}
    </StyledButton>
  );
}

export { Button };
