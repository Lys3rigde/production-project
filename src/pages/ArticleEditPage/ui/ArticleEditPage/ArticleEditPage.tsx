import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';
import { useParams } from 'react-router-dom';
import styles from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
	className?: string;
}

const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
  const { t } = useTranslation();

  const { id } = useParams<{id: string}>();
  const isEdit = !!id;

  return (
    <Page className={classNames(styles.ArticleEditPage, {}, [className])}>
      {isEdit ? 'Редактирование статьи' : 'Создание новой статьи'}
    </Page>
  );
});

export default ArticleEditPage;
