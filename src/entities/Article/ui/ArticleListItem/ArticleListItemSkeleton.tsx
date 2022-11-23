import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/Eye.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import Button from 'shared/ui/Button/Button';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleView } from '../../model/types/article';
import styles from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
	className?: string;
	view: ArticleView
}

export const ArticleListItemSkeleton = memo(({ className, view }: ArticleListItemSkeletonProps) => {
  if (view === ArticleView.LIST) {
    return (
      <div className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}>
        <Card className={styles.card}>
          <div className={styles.header}>
            <Skeleton width={30} height={30} borderRadius="50%" />
            <Skeleton width={150} height={24} className={styles.username} />
            <Skeleton width={150} height={24} className={styles.date} />
          </div>
          <Skeleton width={250} height={32} className={styles.title} />
          <Skeleton width="100%" height={200} className={styles.img} />
          <Skeleton width="100%" height={300} className={styles.textBlock} />
          <div className={styles.footer}>
            <Skeleton height={36} width={200} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}>
      <Card>
        <div className={styles.imageWrapper}>
          <Skeleton width={200} height={200} className={styles.img} />
        </div>
        <div className={styles.infoWrapper}>
          <Skeleton width={130} height={24} />
        </div>
        <Skeleton width={180} height={24} />
      </Card>
    </div>
  );
});
