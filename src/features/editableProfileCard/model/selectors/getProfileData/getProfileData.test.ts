import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
  test('should return data', () => {
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
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toBe(undefined);
  });
});
