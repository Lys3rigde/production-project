import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) => {
  return state.articleDetailsPage?.comment?.isLoading ?? false;
};
export const getArticleCommentsError = (state: StateSchema) => state.articleDetailsPage?.comment?.error;
