import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [isAuthModalOpened, setIsAuthModalOpened] = useState<boolean>(false);

  const handleCloseAuthModal = useCallback(() => setIsAuthModalOpened(false), []);

  const handleOpenModal = useCallback(() => setIsAuthModalOpened(true), []);

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={styles.links}
        onClick={handleOpenModal}
      >
        {t('Войти')}
      </Button>
      <LoginModal isOpen={isAuthModalOpened} onClose={handleCloseAuthModal} />
    </div>
  );
};
