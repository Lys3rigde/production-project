import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import Button from '../Button/Button';
import { HStack } from '../Stack/HStack/HStack';
import styles from './ListBox.module.scss';

type DropdownDirection = 'top' | 'bottom'

export interface ListBoxItem {
  value: string
  content: ReactNode
  disabled?: boolean
}

interface ListBoxProps {
  items?: ListBoxItem[]
  className?: string
  value?: string
  defaultValue?: string
  onChange: <T extends string>(value: T) => void
  readonly?: boolean
  direction?: DropdownDirection
  label?: string
}

const mapDirection: Record<DropdownDirection, string> = {
  bottom: styles.optionsBottom,
  top: styles.optionsTop,
};

export const ListBox = ({
  items, className, value, defaultValue, onChange, readonly, direction = 'bottom', label,
}: ListBoxProps) => {
  return (
    <HStack gap="4">
      {label && <span>{`${label}>`}</span>}
      <HListBox
        disabled={readonly}
        as="div"
        className={classNames(styles.ListBox, {}, [className])}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button
          disabled={readonly}
          className={styles.trigger}
        >
          <Button
            disabled={readonly}
          >
            {value ?? defaultValue }
          </Button>
        </HListBox.Button>
        <HListBox.Options className={classNames(styles.options, {}, [mapDirection[direction]])}>
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              as={Fragment}
              disabled={item.disabled}
            >
              {({ active }) => (
                <li className={classNames(
                  styles.item,
                  {
                    [styles.active]: active,
                    [styles.disabled]: item.disabled,
                  },
                )}
                >
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
};
