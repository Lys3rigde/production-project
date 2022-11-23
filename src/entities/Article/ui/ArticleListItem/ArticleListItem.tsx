import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/Eye.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import Button from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
  Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import styles from './ArticleListItem.module.scss';

interface ArticleListItemProps {
	className?: string;
	article: Article;
	view: ArticleView
}

export const ArticleListItem = memo(({ className, article, view }: ArticleListItemProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleOpenArticle = useCallback(() => {
    navigate(RoutePath.article_details + article.id);
  }, [article.id, navigate]);

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

    return (
      <div className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}>
        <Card className={styles.card}>
          <div className={styles.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={styles.username} />
            <Text text={article.createdAt} className={styles.date} />
          </div>
          <Text title={article.title} className={styles.title} />
          <Text text={article.type.join(', ')} className={styles.types} />
          <img src={article.img} className={styles.img} alt={article.title} />
          {textBlock && <ArticleTextBlockComponent block={textBlock} className={styles.textBlock} /> }
          <div className={styles.footer}>
            <Button
              onClick={handleOpenArticle}
            >
              {t('Читать далее...')}
            </Button>
            <Text text={article.views.toString()} className={styles.views} />
            <Icon Svg={EyeIcon} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}>
      <Card onClick={handleOpenArticle}>
        <div className={styles.imageWrapper}>
          <img src={article.img} className={styles.img} alt={article.title} />
          <Text text={article.createdAt} className={styles.date} />
        </div>
        <div className={styles.infoWrapper}>
          <Text text={article.type.join(', ')} className={styles.types} />
          <Text text={article.views.toString()} className={styles.views} />
          <Icon Svg={EyeIcon} />
        </div>
        <Text text={article.title} className={styles.title} />
      </Card>
    </div>
  );
});
