import * as React from 'react';
import { Theme } from '../../types';
import styled from '@emotion/styled';
import { Box } from '../Box';

interface MenuItemProps extends React.InputHTMLAttributes<HTMLUListElement> {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  selected?: boolean;
  label: string;
}

const Label = styled('span')<{ theme: Theme }>(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  fontWeight: theme.typography.body2.fontWeight,
  lineHeight: theme.typography.body2.lineHeight,
  color: theme.colors.text.default,
}));

const Container = styled('span')<{ theme: Theme }>(({ theme }) => ({
  display: 'inline-flex',
  height: 24,
  width: 24,
  borderRadius: '100%',
  overflow: 'hidden',
  marginRight: theme.size(2),
  border: '1px solid',
  borderColor: theme.colors.border.subtle,
}));

const StyledMenuItem = styled('li')<MenuItemProps & { theme: Theme }>(
  ({ theme, disabled = false, selected, startAdornment, endAdornment }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: 'inherit',
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.body1.fontWeight,
    lineHeight: theme.typography.body1.lineHeight,
    paddingTop: theme.size?.(2.5),
    paddingBottom: theme.size?.(2.5),
    paddingRight: theme.size?.(4),
    paddingLeft: theme.size?.(4),
    whiteSpace: 'normal',
    borderRadius: theme.size?.(2),
    outline: 'none',
    backgroundColor: selected
      ? theme.colors.background.default
      : theme.colors.background.paper,
    '&:hover': {
      backgroundColor: theme.colors.overlay.neutral.subtle,
      cursor: 'pointer',
    },
    '&:focus': {
      backgroundColor: theme.colors.overlay.neutral.subtle,
      cursor: 'pointer',
    },
  })
);

const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>(
  (props, ref) => {
    const {
      label,
      selected,
      disabled,
      startAdornment,
      endAdornment,
      ...otherProps
    } = props;

    return (
      <StyledMenuItem
        ref={ref}
        selected={selected}
        disabled={disabled}
        startAdornment={startAdornment}
        endAdornment={endAdornment}
        {...otherProps}
      >
        {startAdornment && <Container>{startAdornment}</Container>}
        <Label>{label}</Label>
        {endAdornment && (
          <Box height={10} width={10}>
            {endAdornment}
          </Box>
        )}
      </StyledMenuItem>
    );
  }
);

export { MenuItem };
