import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from 'entities/Profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors', () => {
  test('should return validateErrors', () => {
    const validateErrors = [ValidateProfileError.SERVER_ERROR, ValidateProfileError.NO_DATA];
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors,
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateErrors);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([]);
  });
});
