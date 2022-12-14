import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/ui/Page';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import styles from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';

interface ArticleListProps {
	className?: string;
  articles: Article[]
	isLoading?: boolean
	view?: ArticleView
  target?: HTMLAttributeAnchorTarget
  virtualized?: boolean
}

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    view = ArticleView.LIST,
    articles,
    target,
    isLoading,
    virtualized = true,
  } = props;

  const { t } = useTranslation('article');

  const isList = view === ArticleView.LIST;

  const itemsPerRow = isList ? 1 : 3;
  const rowsCount = isList ? articles.length : Math.ceil(articles.length / itemsPerRow);

  const rowRender = ({
    index, key, style,
  }: ListRowProps) => {
    const items = [];
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

    for (let i = fromIndex; i < toIndex; i += 1) {
      items.push(
        <ArticleListItem
          target={target}
          article={articles[index]}
          view={view}
          key={articles[index].id}
          className={styles.card}
        />,
      );
    }

    return (
      <div
        key={key}
        style={style}
        className={styles.row}
      >
        {items}
      </div>
    );
  };

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
        <Text size={TextSize.L} title={t('Статьи не найдены')} />
      </div>
    );
  }

  return (
  // @ts-ignore
    <WindowScroller
      scrollElement={document.getElementById(PAGE_ID) as Element}
    >
      {({
        height,
        width,
        registerChild,
        scrollTop,
        onChildScroll,
        isScrolling,
      }) => (
        <div
          // @ts-ignore
          ref={registerChild}
          className={classNames(styles.ArticleList, {}, [className, styles[view]])}
        >
          {virtualized ? (
          // @ts-ignore
            <List
              autoHeight
              height={height}
              rowCount={rowsCount}
              rowHeight={isList ? 700 : 330}
              rowRenderer={rowRender}
              width={width ? width - 80 : 700}
              onScroll={onChildScroll}
              isScrolling={isScrolling}
              scrollTop={scrollTop}
            />
          ) : (
            articles.map((item) => (
              <ArticleListItem article={item} view={view} target={target} key={item.id} className={styles.card} />
            ))
          )}
          {isLoading && new Array(view === ArticleView.GRID ? 9 : 3).fill(0).map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <ArticleListItemSkeleton key={index} view={view} />
          ))}
        </div>
      )}
    </WindowScroller>
  );
});
