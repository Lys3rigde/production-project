import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');

  const handleChange = (value: string) => {
    setValue(value);
  };

  return (
    <div>
      {t('Главная страница')}
      <Input value={value} onChange={handleChange} placeholder="Введите текст" />
    </div>
  );
};

export default MainPage;
