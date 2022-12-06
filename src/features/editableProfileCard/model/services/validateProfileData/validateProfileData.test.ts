import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';
import { validateProfileData } from './validateProfileData';

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

describe('validateProfileData', () => {
  test('success', () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('without firstname and lastname', async () => {
    const result = validateProfileData({ ...data, firstname: '', lastname: '' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('incorrect age', () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('incorrect city', () => {
    const result = validateProfileData({ ...data, city: '' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_CITY]);
  });

  test('no data', () => {
    const result = validateProfileData(undefined);

    expect(result).toEqual([ValidateProfileError.NO_DATA]);
  });

  test('incorrect all', () => {
    const result = validateProfileData({});

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA, ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_CITY]);
  });
});
