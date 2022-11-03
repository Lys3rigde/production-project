import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    username, password, error, isLoading,
  } = useSelector(getLoginState);

  const handleChangeUsername = useCallback(
    (value: string) => dispatch(loginActions.setUsername(value)),
    [dispatch],
  );

  const handleChangePassword = useCallback(
    (value: string) => dispatch(loginActions.setPassword(value)),
    [dispatch],
  );

  const handleLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <Text title={t('Авторизация')} />
      {error && (<Text text={error} theme={TextTheme.ERROR} />)}
      <Input
        type="text"
        className={styles.input}
        placeholder={t('Введите логин')}
        autoFocus
        onChange={handleChangeUsername}
        value={username}
      />
      <Input
        type="text"
        className={styles.input}
        placeholder={t('Введите пароль')}
        onChange={handleChangePassword}
        value={password}
      />
      <Button
        disabled={isLoading}
        className={styles.loginBtn}
        onClick={handleLoginClick}
      >
        {t('Войти')}
      </Button>
    </div>
  );
});
