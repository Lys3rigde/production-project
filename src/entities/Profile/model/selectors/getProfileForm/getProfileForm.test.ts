import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
  test('should return formData', () => {
    const form = {
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
        form,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(form);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toBe(undefined);
  });
});
