import * as React from 'react';
import { ChevronDown } from './ChevronDown';
import { ChevronUp } from './ChevronUp';
import { ArrowRightLeft } from './ArrowRightLeft';

interface IProps extends React.SVGProps<SVGSVGElement> {
  icon: 'chevronDown' | 'chevronUp' | 'arrowRightLeft';
}

const ICON_MAP: Record<
  IProps['icon'],
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  arrowRightLeft: ArrowRightLeft,
};

function Icon(props: IProps) {
  const { icon, ...otherProps } = props;
  const Component = ICON_MAP[icon] || ChevronDown;

  return <Component height={24} width={24} {...otherProps} />;
}

export { Icon };
