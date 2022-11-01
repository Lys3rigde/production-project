import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ButtonTheme {
	CLEAR = 'clear',
	CLEAR_INVERTED = 'clear_inverted',
	OUTLINE = 'outline',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'background_inverted',
}

export enum ButtonSize {
	L = 'size_l',
	M = 'size_m',
	XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: ButtonTheme
	square?: boolean
	size?: ButtonSize
}

const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme = ButtonTheme.OUTLINE,
    square,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [styles.square]: square,
  };

  return (
    <button
      type="button"
      className={classNames(styles.Button, mods, [props.className, styles[theme], styles[size]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
