import styled from '@emotion/styled';
import React, { JSX } from 'react';
import { ResponsiveProp, Theme } from '../../types';
import { getResponsiveStyles } from '../../utils';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: keyof JSX.IntrinsicElements;
  display?: ResponsiveProp<
    | 'block'
    | 'inline-block'
    | 'flex'
    | 'inline-flex'
    | 'grid'
    | 'inline-grid'
    | 'none'
  >;
  flexDirection?: ResponsiveProp<
    'row' | 'column' | 'row-reverse' | 'column-reverse'
  >;
  justifyContent?: ResponsiveProp<
    'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around'
  >;
  alignItems?: ResponsiveProp<
    'stretch' | 'flex-start' | 'center' | 'flex-end' | 'baseline'
  >;
  gap?: React.CSSProperties['gap'];
  padding?: number | string;
  margin?: number | string;
  width?: ResponsiveProp<React.CSSProperties['width']>;
  height?: ResponsiveProp<React.CSSProperties['height']>;
  maxWidth?: React.CSSProperties['maxWidth'];
  backgroundColor?: keyof Theme['colors']['background'];
  border?: keyof Theme['colors']['border'];
  borderTop?: keyof Theme['colors']['border'];
  borderBottom?: keyof Theme['colors']['border'];
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
  flexWrap?: ResponsiveProp<React.CSSProperties['flexWrap']>;
  minHeight?: React.CSSProperties['minHeight'];
}

const EXCLUDED_PROPS = [
  'as',
  'display',
  'flexDirection',
  'justifyContent',
  'alignItems',
  'gap',
  'padding',
  'margin',
  'width',
  'height',
  'backgroundColor',
  'border',
  'borderTop',
  'borderBottom',
  'borderRadius',
  'color',
  'zIndex',
  'position',
  'px',
  'py',
  'mx',
  'my',
  'minHeight',
  'boxShadow',
  'maxWidth',
  'flex',
  'textAlign',
  'flexWrap',
];

// Styled Box
const StyledBox = styled('div', {
  shouldForwardProp: (prop) => !EXCLUDED_PROPS.includes(prop), // This will prevent these props from being forwarded to the DOM
})<BoxProps>(
  ({
    theme,
    display,
    flexDirection,
    justifyContent,
    alignItems,
    gap = '',
    padding,
    margin,
    width,
    height,
    backgroundColor,
    border,
    borderRadius,
    borderTop,
    borderBottom,
    color,
    zIndex,
    position,
    px,
    py,
    my,
    mx,
    minHeight,
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
    gap: theme.size(gap),
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
    borderTop: borderTop
      ? `1px solid ${theme.colors.border[borderTop]}`
      : 'none',
    borderBottom: borderBottom
      ? `1px solid ${theme.colors.border[borderBottom]}`
      : 'none',
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
    minHeight,
    boxShadow: theme.boxShadow[boxShadow ?? 'none'] || theme.boxShadow.none,
    [`@media (min-width: ${theme.breakpoints.xs})`]: {
      display: getResponsiveStyles(display, theme)?.xs,
      flexWrap: getResponsiveStyles(flexWrap, theme)?.xs,
      flexDirection: getResponsiveStyles(flexDirection, theme)?.xs,
      width: getResponsiveStyles(width, theme)?.xs,
    },
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      display: getResponsiveStyles(display, theme)?.sm,
      flexWrap: getResponsiveStyles(flexWrap, theme)?.sm,
      width: getResponsiveStyles(width, theme)?.sm,
      flexDirection: getResponsiveStyles(flexDirection, theme)?.sm,
    },
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      display: getResponsiveStyles(display, theme)?.md,
      flexWrap: getResponsiveStyles(flexWrap, theme)?.md,
      width: getResponsiveStyles(width, theme)?.md,
      flexDirection: getResponsiveStyles(flexDirection, theme)?.md,
    },
    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      display: getResponsiveStyles(display, theme)?.lg,
      flexWrap: getResponsiveStyles(flexWrap, theme)?.lg,
      width: getResponsiveStyles(width, theme)?.lg,
      flexDirection: getResponsiveStyles(flexDirection, theme)?.lg,
    },
  })
);

function Box(props: BoxProps) {
  const { children, as, ...otherProps } = props;
  const Component = as || 'div';

  return (
    <StyledBox as={Component} {...otherProps}>
      {children}
    </StyledBox>
  );
}

export { Box };
