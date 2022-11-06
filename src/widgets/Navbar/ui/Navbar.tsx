import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [isAuthModalOpened, setIsAuthModalOpened] = useState<boolean>(false);

  const userAuthData = useSelector(getUserAuthData);

  const handleCloseAuthModal = useCallback(() => setIsAuthModalOpened(false), []);

  const handleOpenModal = useCallback(() => setIsAuthModalOpened(true), []);

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (userAuthData) {
    return (
      <div className={classNames(styles.Navbar, {}, [className])}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={styles.links}
          onClick={handleLogout}
        >
          {t('Выйти')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={styles.links}
        onClick={handleOpenModal}
      >
        {t('Войти')}
      </Button>
      {isAuthModalOpened && <LoginModal isOpen={isAuthModalOpened} onClose={handleCloseAuthModal} />}
    </div>
  );
});
