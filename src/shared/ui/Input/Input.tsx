import { classNames } from 'shared/lib/classNames/classNames';
import React, {
  InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string;
	value?: string;
	onChange?: (value: string) => void;
  placeholder?: string
  autoFocus?: boolean
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [caretPosition, setCaretPosition] = useState<number>(0);

  const ref = useRef<HTMLInputElement>();

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autoFocus]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
    setCaretPosition(event.target.value.length);
  };

  const handleBlur = () => setIsFocused(false);

  const handleFocus = () => setIsFocused(true);

  const handleSelect = (event: any) => {
    setCaretPosition(event?.target?.selectionStart || 0);
  };

  return (
    <div className={classNames(styles.InputWrapper, {}, [className])}>
      {placeholder && (
        <div className={styles.placeholder}>
          {`${placeholder}>`}
        </div>
      )}
      <div className={styles.caretWrapper}>
        <input
          ref={ref}
          onBlur={handleBlur}
          onFocus={handleFocus}
          type={type}
          value={value}
          onChange={handleChange}
          className={styles.input}
          onSelect={handleSelect}
          {...otherProps}
        />
        {isFocused && (
          <span
            className={styles.caret}
            style={{ left: `${caretPosition * 9.6}px` }}
          />
        )}
      </div>
    </div>
  );
});
