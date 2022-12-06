import { memo } from 'react';
import { useSelector } from 'react-redux';
import { ArticleList } from 'entities/Article';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { getArticles } from '../../model/slice/artcliesPageSlice';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlePageSelectors';

interface ArticleInfiniteListProps {
	className?: string;
}

export const ArticleInfiniteList = memo(({ className }: ArticleInfiniteListProps) => {
  const { t } = useTranslation('article');

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  if (error) {
    return (
      <Text title={t('Произошла ошибка при загрузке статей')} />
    );
  }

  return (
    <ArticleList
      isLoading={isLoading}
      view={view}
      articles={articles}
      className={className}
    />
  );
});
