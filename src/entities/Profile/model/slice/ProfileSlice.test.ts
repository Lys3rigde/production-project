import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData, ValidateProfileError } from 'entities/Profile';
import { ProfileSchema } from '../types/profile';
import { profileReducer, profileActions } from './ProfileSlice';

const data = {
  username: 'admin',
  age: 22,
  country: Country.UA,
  lastname: 'user',
  firstname: 'user',
  city: 'saf',
  currency: Currency.RUB,
  avatar: 'https://www.w3schools.com/howto/img_avatar.png',
};

describe('ProfileSlice.test', () => {
  test('test set readonly ', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(
      profileReducer(
				state as ProfileSchema,
				profileActions.setReadonly(true),
      ),
    ).toEqual({ readonly: true });
  });

  test('test set cancelEdit ', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
    expect(
      profileReducer(
				state as ProfileSchema,
				profileActions.cancelEdit(),
      ),
    ).toEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data,
    });
  });

  test('test set updateProfile ', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };
    expect(
      profileReducer(
				state as ProfileSchema,
				profileActions.updateProfile({ username: '123456' }),
      ),
    ).toEqual({ form: { username: '123456' } });
  });

  test('test set update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };
    expect(
      profileReducer(
				state as ProfileSchema,
				updateProfileData.pending,
      ),
    ).toEqual({ isLoading: true, validateErrors: undefined });
  });

  test('test set update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(
      profileReducer(
				state as ProfileSchema,
				updateProfileData.fulfilled(data, ''),
      ),
    ).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      form: data,
      data,
    });
  });
});
