import * as React from 'react';
import { ChevronDown } from './ChevronDown';
import { ChevronUp } from './ChevronUp';
import { ArrowRightLeft } from './ArrowRightLeft';
import { Globe } from './Globe';
import { Theme } from '../../types';
import { useTheme } from '@emotion/react';

interface IProps extends React.SVGProps<SVGSVGElement> {
  icon: 'chevronDown' | 'chevronUp' | 'arrowRightLeft' | 'globe';
  size?: 'sm' | 'md' | 'lg';
  color?: keyof Theme['colors']['border'];
}

const ICON_MAP: Record<
  IProps['icon'],
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  arrowRightLeft: ArrowRightLeft,
  globe: Globe,
};

const SIZE_MAP = {
  sm: 20,
  md: 24,
  lg: 64,
};

function Icon(props: IProps) {
  const { icon, color = 'bold', size = 'md', ...otherProps } = props;
  const Component = ICON_MAP[icon] || ChevronDown;
  const theme: any = useTheme();

  function getIconColor() {
    if (color) return theme?.colors?.border[color];
    else return '';
  }
  return (
    <Component
      style={{ color: getIconColor() }}
      height={SIZE_MAP[size]}
      width={SIZE_MAP[size]}
      {...otherProps}
    />
  );
}

export { Icon };
