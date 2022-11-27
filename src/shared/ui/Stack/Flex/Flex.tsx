import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import styles from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between'
export type FlexAlign = 'start' | 'center' | 'end'
export type FlexDiretion = 'row' | 'column'
export type FlexGap = '4' | '8' | '16' | '30'

const justifyClasses: Record<FlexJustify, string> = {
  start: styles.justifyStart,
  center: styles.justifyCenter,
  end: styles.justifyEnd,
  between: styles.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
  start: styles.alignStart,
  center: styles.alignCenter,
  end: styles.alignEnd,
};

const directionClasses: Record<FlexDiretion, string> = {
  row: styles.directionRow,
  column: styles.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
  4: styles.gap4,
  8: styles.gap8,
  16: styles.gap16,
  30: styles.gap30,
};

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends DivProps {
	className?: string;
  children: ReactNode
  justify?: FlexJustify;
  align?: FlexAlign
  direction?: FlexDiretion
  gap?: FlexGap
  max?: boolean
}

export const Flex = (props: FlexProps) => {
  const {
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap,
    max,
    ...otherProps
  } = props;

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];

  const mods: Mods = {
    [styles.max]: max,
  };

  return (
    <div className={classNames(styles.Flex, mods, classes)} {...otherProps}>
      {children}
    </div>
  );
};
