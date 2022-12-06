import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { Text } from 'shared/ui/Text/Text';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import { profileActions } from '../../model/slice/ProfileSlice';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

interface EditableProfileCardHeaderProps {
	className?: string;
}

export const EditableProfileCardHeader = memo(({ className }: EditableProfileCardHeaderProps) => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const readonly = useSelector(getProfileReadonly);

  const handleEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const handleCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const handleSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);
  const canEdit = authData?.id === profileData?.id;
  return (
    <HStack max justify="between" className={classNames('', {}, [className])}>
      <Text title={t('Профиль')} />
      {canEdit && (
        <div>
          {readonly ? (
            <Button data-testid="EditableProfileCardHeader.EditBtn" onClick={handleEdit}>{t('Редактировать')}</Button>
          ) : (
            <HStack gap="8">
              <Button
                data-testid="EditableProfileCardHeader.CancelBtn"
                onClick={handleCancelEdit}
                theme={ButtonTheme.OUTLINE_RED}
              >
                {t('Отменить')}
              </Button>
              <Button data-testid="EditableProfileCardHeader.ConfirmBtn" onClick={handleSave}>{t('Сохранить')}</Button>
            </HStack>
          )}
        </div>
      )}
    </HStack>
  );
});
