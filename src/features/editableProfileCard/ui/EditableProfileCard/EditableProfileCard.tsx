import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ProfileCard } from 'entities/Profile';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from 'shared/ui/Stack';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { ValidateProfileError } from '../../model/types/editableProfileCardSchema';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/ProfileSlice';

interface EditableProfileCardProps {
    className?: string;
    id: string
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className, id } = props;
  const { t } = useTranslation('profile');

  const dispatch = useAppDispatch();

  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readOnly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorsTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка'),
    [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
    [ValidateProfileError.INCORRECT_CITY]: t('Некорректный город'),
    [ValidateProfileError.NO_DATA]: t('Нет данных'),
  };

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });
  const handleChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ firstname: value ?? '' }));
  }, [dispatch]);

  const handleChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value ?? '' }));
  }, [dispatch]);

  const handleChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value ?? '' }));
  }, [dispatch]);

  const handleChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value ?? '' }));
  }, [dispatch]);

  const handleChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value ?? '' }));
  }, [dispatch]);

  const handleChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateProfile({ currency }));
  }, [dispatch]);

  const handleChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateProfile({ country }));
  }, [dispatch]);

  const handleChangeAge = useCallback((value?: string) => {
    const regex = /^[1-9]\d*$/;
    if (!regex.test(value ?? '')) return;
    dispatch(profileActions.updateProfile({ age: Number(value) }));
  }, [dispatch]);

  const initialReducers: ReducersList = {
    profile: profileReducer,
  };

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <VStack gap="8" max className={classNames(' ', {}, [className])}>
        {validateErrors.length ? validateErrors.map((err) => (
          <Text
            data-testid="EditableProfileCard.Error"
            key={err}
            theme={TextTheme.ERROR}
            text={validateErrorsTranslates[err]}
          />
        )) : null}
        <ProfileCard
          handleChangeUsername={handleChangeUsername}
          handleChangeAvatar={handleChangeAvatar}
          handleChangeAge={handleChangeAge}
          handleChangeCity={handleChangeCity}
          readOnly={readOnly}
          handleChangeLastname={handleChangeLastname}
          handleChangeCurrency={handleChangeCurrency}
          handleChangeFirstname={handleChangeFirstname}
          handleChangeCountry={handleChangeCountry}
          data={formData}
          isLoading={isLoading}
          error={error}
        />
      </VStack>
    </DynamicModuleLoader>
  );
});
