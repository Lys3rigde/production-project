import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ChangeEvent, useMemo } from 'react';
import styles from './Select.module.scss';

export interface SelectOption<T extends string> {
  value: T;
  content: string
}

interface SelectProps<T extends string> {
  className?: string;
	label?: string
  options?: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readOnly?: boolean
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const {
    className,
    label,
    options,
    value,
    onChange,
    readOnly,
  } = props;

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  };

  const optionsList = useMemo(
    () => options?.map((option) => (
      <option
        value={option.value}
        key={option.value}
        className={styles.option}
      >
        {option.content}
      </option>
    )),
    [options],
  );

  const mods: Mods = {
    //
  };

  return (
    <div className={classNames(styles.Wrapper, mods, [className])}>
      {label && <span className={styles.label}>{`${label}>`}</span>}
      <select
        disabled={readOnly}
        value={value}
        onChange={handleChange}
        className={styles.select}
      >
        {optionsList}
      </select>
    </div>
  );
};
