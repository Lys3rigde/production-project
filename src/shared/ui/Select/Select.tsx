import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import styles from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string
}

interface SelectProps {
  className?: string;
	label?: string
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean
}

export const Select = memo((props: SelectProps) => {
  const {
    className,
    label,
    options,
    value,
    onChange,
    readOnly,
  } = props;

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  const optionsList = useMemo(
    () => options?.map((option) => (
      <option
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
});
