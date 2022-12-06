import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const [isAuthModalOpened, setIsAuthModalOpened] = useState<boolean>(false);

  const userAuthData = useSelector(getUserAuthData);

  const handleCloseAuthModal = useCallback(() => setIsAuthModalOpened(false), []);

  const handleOpenModal = useCallback(() => setIsAuthModalOpened(true), []);

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (userAuthData) {
    return (
      <div className={classNames(styles.Navbar, {}, [className])}>
        <Text
          className={styles.appName}
          title={t('Not a habr')}
          theme={TextTheme.INVERTED}
        />
        <AppLink
          to={RoutePath.article_create}
          theme={AppLinkTheme.SECONDARY}
        >
          {t('Создать статью')}
        </AppLink>
        <Dropdown
          direction="bottom left"
          className={styles.dropdown}
          items={[
            {
              content: t('Выйти'),
              onClick: handleLogout,
            },
            ...(isAdminPanelAvailable ? [{
              content: t('Admin Panel'),
              href: RoutePath.admin_panel,
            }] : []),
            {
              content: t('Профиль'),
              href: RoutePath.profile + userAuthData.id,
            },
          ]}
          trigger={<Avatar size={30} src={userAuthData.avatar} />}
        />
      </div>
    );
  }

  return (
    <header className={classNames(styles.Navbar, {}, [className])}>
      <Text className={styles.appName} title={t('Not a habr')} />
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={styles.links}
        onClick={handleOpenModal}
      >
        {t('Войти')}
      </Button>
      {isAuthModalOpened && <LoginModal isOpen={isAuthModalOpened} onClose={handleCloseAuthModal} />}
    </header>
  );
});
