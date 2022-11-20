import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, {
  InputHTMLAttributes, memo, MutableRefObject, useEffect, useRef, useState,
} from 'react';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
  className?: string;
	value?: string | number;
	onChange?: (value: string) => void;
  placeholder?: string
  autoFocus?: boolean
  readOnly?: boolean
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    readOnly,
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [caretPosition, setCaretPosition] = useState<number>(0);

  const ref = useRef() as MutableRefObject<HTMLInputElement>;

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

  const isCaretVisible = isFocused && !readOnly;

  const mods: Mods = {
    [styles.readOnly]: readOnly,
  };

  return (
    <div className={classNames(styles.InputWrapper, mods, [className])}>
      {placeholder && (
        <div className={styles.placeholder}>
          {`${placeholder}>`}
        </div>
      )}
      <div className={styles.caretWrapper}>
        <input
          readOnly={readOnly}
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
        {isCaretVisible && (
          <span
            className={styles.caret}
            style={{ left: `${caretPosition * 9.6}px` }}
          />
        )}
      </div>
    </div>
  );
});
