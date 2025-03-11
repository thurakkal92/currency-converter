import styled from '@emotion/styled';
import React, { ButtonHTMLAttributes } from 'react';
import { Icon } from '../Icon';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  variant?: 'default';
  icon: 'chevronDown' | 'chevronUp' | 'arrowRightLeft';
  size?: 'small' | 'medium' | 'large';
}

const StyledIconButton = styled('button')<IProps>(
  ({ theme, variant = 'default', size = 'medium' }) => {
    const SIZES: Record<'small' | 'medium' | 'large', number> = {
      small: theme.size(8),
      medium: theme.size(10),
      large: theme.size(12),
    };

    const sizeKey: keyof typeof SIZES = size || 'medium';
    const buttonSize = SIZES[sizeKey];

    return {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      width: buttonSize,
      height: buttonSize,
      cursor: 'pointer',
      transition: 'all 0.3s ease-in-out',
      backgroundColor:
        variant === 'default' ? theme.colors.background.paper : 'transparent',
      color: variant === 'default' ? theme.colors.text.default : '',
      border: `1px solid ${theme.colors.border.default}`,
      '&:hover': {
        backgroundColor:
          variant === 'default'
            ? theme.colors.background.default
            : 'transparent',
      },
      '&:disabled': {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    };
  }
);

function IconButton(props: IProps) {
  const { icon, variant, size, ...otherProps } = props;
  return (
    <StyledIconButton variant={variant} size={size} {...otherProps}>
      <Icon icon={icon} />
    </StyledIconButton>
  );
}

export { IconButton };
