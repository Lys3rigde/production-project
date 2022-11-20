import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';
import { CountrySelect } from 'entities/Country';
import styles from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string
  isLoading?: boolean
  readOnly?: boolean
  handleChangeFirstname?: (value?: string) => void
  handleChangeLastname?: (value?: string) => void
  handleChangeCity?: (value?: string) => void
  handleChangeAge?: (value?: string) => void
  handleChangeUsername?: (value?: string) => void,
  handleChangeAvatar?: (value?: string) => void,
  handleChangeCurrency?: (value: Currency) => void,
  handleChangeCountry?: (value: Country) => void,
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    error,
    isLoading,
    handleChangeFirstname,
    handleChangeLastname,
    handleChangeCity,
    handleChangeAge,
    handleChangeUsername,
    handleChangeAvatar,
    handleChangeCurrency,
    handleChangeCountry,
    readOnly,
  } = props;

  const { t } = useTranslation('profile');

  const mods = {
    [styles.editing]: !readOnly,
  };

  if (isLoading) {
    return (
      <div className={classNames(styles.ProfileCard, {}, [className, styles.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(styles.ProfileCard, { [styles.error]: true }, [className])}>
        <Text
          align={TextAlign.CENTER}
          theme={TextTheme.ERROR}
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте обновить страницу')}
        />
      </div>
    );
  }

  return (
    <div className={classNames(styles.ProfileCard, mods, [className])}>
      <div className={styles.data}>
        {data?.avatar && (
          <div className={styles.avatarWrapper}>
            <Avatar src={data?.avatar} alt={t('Аватар')} size={100} />
          </div>
        )}
        <Input
          readOnly={readOnly}
          value={data?.firstname}
          placeholder={t('Ваше имя')}
          className={styles.input}
          onChange={handleChangeFirstname}
        />
        <Input
          readOnly={readOnly}
          value={data?.lastname}
          placeholder={t('Ваша фамилия')}
          className={styles.input}
          onChange={handleChangeLastname}
        />
        <Input
          readOnly={readOnly}
          value={data?.age}
          placeholder={t('Ваш возраст')}
          className={styles.input}
          onChange={handleChangeAge}
        />
        <Input
          readOnly={readOnly}
          value={data?.city}
          placeholder={t('Город')}
          className={styles.input}
          onChange={handleChangeCity}
        />
        <Input
          readOnly={readOnly}
          value={data?.username}
          placeholder={t('Ваше имя пользователя')}
          className={styles.input}
          onChange={handleChangeUsername}
        />
        <Input
          readOnly={readOnly}
          value={data?.avatar}
          placeholder={t('Введите ссылку на аватар')}
          className={styles.input}
          onChange={handleChangeAvatar}
        />
        <CurrencySelect
          className={styles.input}
          value={data?.currency}
          onChange={handleChangeCurrency}
          readOnly={readOnly}
        />
        <CountrySelect
          className={styles.input}
          value={data?.country}
          onChange={handleChangeCountry}
          readOnly={readOnly}
        />
      </div>
    </div>
  );
};
