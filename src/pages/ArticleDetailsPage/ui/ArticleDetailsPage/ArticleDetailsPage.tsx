import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
	className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article');

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
      ARTICLE DETAILS
    </div>
  );
};

export default memo(ArticleDetailsPage);
