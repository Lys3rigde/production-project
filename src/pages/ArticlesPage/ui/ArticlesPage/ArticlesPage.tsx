import { memo, useCallback } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Page } from 'widgets/Page';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useSearchParams } from 'react-router-dom';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { articlesPageReducer } from '../../model/slice/artcliesPageSlice';
import styles from './ArticlesPage.module.scss';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';

interface ArticlesPageProps {
	className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  const handleLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={handleLoadNextPart}>
        <ArticlesPageFilters className={styles.filters} />
        <ArticleInfiniteList />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
