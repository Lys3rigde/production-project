import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentCard } from 'entities/Comment/ui/CommentCard/CommentCard';
import styles from './CommentList.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
	className?: string;
  comments?: Comment[];
  isLoading?: boolean
}

export const CommentList = memo(({ className, comments, isLoading }: CommentListProps) => {
  const { t } = useTranslation();
  let a;
  return (
    <div className={classNames(styles.CommentList, {}, [className])}>
      {comments?.length
        ? comments.map((comment) => (
          <CommentCard
            className={styles.comment}
            comment={comment}
            isLoading={isLoading}
          />
        ))
        : <Text text={t('Комментарии отсутствуют')} />}
    </div>
  );
});
