import { AddCommentFormSchema } from '../types/addCommentForm';
import { addCommentFormActions, addCommentFormReducer } from './addCommentFormSlice';

describe('loginSlice', () => {
  test('test set username ', () => {
    const state: DeepPartial<AddCommentFormSchema> = { text: '1' };
    expect(
      addCommentFormReducer(
				state as AddCommentFormSchema,
				addCommentFormActions.setText('123123'),
      ),
    ).toEqual({ text: '123123' });
  });
});
