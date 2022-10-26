import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [isAuthModalOpened, setIsAuthModalOpened] = useState<boolean>(false);

  const handleCloseModal = useCallback(() => setIsAuthModalOpened((prev) => !prev), []);

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={styles.links}
        onClick={handleCloseModal}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModalOpened} onClose={handleCloseModal}>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        {/* eslint-disable-next-line */}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dolores eaque maiores perspiciatis quis rerum saepe sunt suscipit voluptatem voluptatibus.
      </Modal>
    </div>
  );
};
