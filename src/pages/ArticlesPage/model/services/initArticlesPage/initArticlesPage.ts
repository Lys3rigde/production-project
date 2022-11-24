import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from '../../slice/artcliesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { getArticlesPageInited } from '../../selectors/articlePageSelectors';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (_, thunkAPI) => {
    const {
      dispatch, getState,
    } = thunkAPI;
    const inited = getArticlesPageInited(getState());

    if (inited) return;
    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({
      page: 1,
    }));
  },
);
