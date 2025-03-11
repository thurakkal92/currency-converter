import styled from '@emotion/styled';
import React from 'react';
import { Theme } from '../../types';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  display?:
    | 'block'
    | 'inline-block'
    | 'flex'
    | 'inline-flex'
    | 'grid'
    | 'inline-grid'
    | 'none';
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  alignItems?: 'stretch' | 'flex-start' | 'center' | 'flex-end' | 'baseline';
  gap?: number | string;
  padding?: number | string;
  margin?: number | string;
  width?: string | number;
  height?: string | number;
  maxWidth?: React.CSSProperties['maxWidth'];
  backgroundColor?: keyof Theme['colors']['background'];
  border?: keyof Theme['colors']['border'];
  borderRadius?: number | string;
  color?: keyof Theme['colors']['text'];
  zIndex?: number;
  px?: number | string;
  py?: number | string;
  mx?: number | string;
  my?: number | string;
  boxShadow?: keyof Theme['boxShadow'];
  flex?: React.CSSProperties['flex'];
  textAlign?: React.CSSProperties['textAlign'];
  position?: React.CSSProperties['position'];
  flexWrap?: React.CSSProperties['flexWrap'];
}

// Styled Box
const StyledBox = styled('div')<BoxProps>(
  ({
    theme,
    display,
    flexDirection,
    justifyContent,
    alignItems,
    gap,
    padding,
    margin,
    width,
    height,
    backgroundColor,
    border,
    borderRadius,
    color,
    zIndex,
    position,
    px,
    py,
    my,
    mx,
    boxShadow,
    maxWidth,
    flex,
    textAlign,
    flexWrap,
  }) => ({
    display: display || 'block',
    flexDirection,
    justifyContent,
    alignItems,
    gap: theme.size?.(gap) || gap,
    padding:
      padding !== undefined
        ? theme.size(padding)
        : `${theme.size(py ?? 0)} ${theme.size(px ?? 0)}`,

    margin:
      margin !== undefined
        ? theme.size(margin)
        : `${theme.size(my ?? 0)} ${theme.size(mx ?? 0)}`,
    maxWidth: maxWidth,
    width: typeof width === 'number' ? theme.size(width) : width,
    height: typeof height === 'number' ? theme.size(height) : height,
    backgroundColor: backgroundColor
      ? theme.colors.background[backgroundColor]
      : 'transparent',
    border: border ? `1px solid ${theme.colors.border[border]}` : 'none',
    borderRadius:
      typeof borderRadius === 'number'
        ? theme.size(borderRadius)
        : borderRadius,
    color: color ? theme.colors.text[color] : theme.colors.text.default,
    zIndex,
    flex,
    textAlign,
    position,
    flexWrap,
    boxShadow: theme.boxShadow[boxShadow ?? 'none'] || theme.boxShadow.none,
  })
);

function Box(props: BoxProps) {
  const { children, ...othereProps } = props;
  return <StyledBox {...othereProps}>{children}</StyledBox>;
}

export { Box };
