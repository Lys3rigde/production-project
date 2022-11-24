import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleListItem } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import styles from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';

interface ArticleListProps {
	className?: string;
  articles: Article[]
	isLoading?: boolean
	view?: ArticleView
}

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    view = ArticleView.LIST,
    articles,
    isLoading,
  } = props;

  const renderArticle = (article: Article) => (
    <ArticleListItem
      article={article}
      view={view}
      key={article.id}
    />
  );

  return (
    <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
      {articles.length > 0
        ?	articles.map(renderArticle)
        : null}
      {isLoading && new Array(view === ArticleView.GRID ? 9 : 3).fill(0).map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ArticleListItemSkeleton key={index} view={view} />
      ))}
    </div>
  );
});
