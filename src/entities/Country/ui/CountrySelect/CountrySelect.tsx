import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void
  readOnly?: boolean
}

const options = [
  { value: Country.RU, content: Country.RU },
  { value: Country.AM, content: Country.AM },
  { value: Country.UA, content: Country.UA },
  { value: Country.BY, content: Country.BY },
];

export const CountrySelect = memo(({
  className, value, onChange, readOnly,
}: CountrySelectProps) => {
  const { t } = useTranslation();

  const handleChange = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    <ListBox
      className={classNames('', {}, [className])}
      items={options}
      value={value}
      onChange={handleChange}
      readonly={readOnly}
      direction="top right"
      label={t('Укажите страну')}
    />
  );
});
