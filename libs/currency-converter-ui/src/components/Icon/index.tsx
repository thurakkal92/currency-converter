import * as React from 'react';
import { ChevronDown } from './ChevronDown';
import { ChevronUp } from './ChevronUp';
import { ArrowRightLeft } from './ArrowRightLeft';
import { Globe } from './Globe';

interface IProps extends React.SVGProps<SVGSVGElement> {
  icon: 'chevronDown' | 'chevronUp' | 'arrowRightLeft' | 'globe';
  size?: 'sm' | 'md' | 'lg';
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
  const { icon, size = 'md', ...otherProps } = props;
  const Component = ICON_MAP[icon] || ChevronDown;
  return (
    <Component height={SIZE_MAP[size]} width={SIZE_MAP[size]} {...otherProps} />
  );
}

export { Icon };
