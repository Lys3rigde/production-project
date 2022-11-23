import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Comment } from 'entities/Comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import styles from './CommentCard.module.scss';

interface CommentCardProps {
	className?: string;
  comment: Comment;
  isLoading?: boolean
}

export const CommentCard = memo(({ className, comment, isLoading }: CommentCardProps) => {
  if (isLoading) {
    return (
      <div className={classNames(styles.CommentCard, {}, [className])}>
        <div className={styles.header}>
          <Skeleton width={30} height={30} borderRadius="50%" />
          <Skeleton width={100} height={30} borderRadius={4} />
        </div>
        <Skeleton width="100%" height={50} borderRadius={10} />
      </div>
    );
  }

  return (
    <div className={classNames(styles.CommentCard, {}, [className])}>
      <div className={styles.header}>
        {comment.user.avatar ? <Avatar size={30} src={comment.user.avatar} /> : null}
        <Text title={comment.user.username} />
      </div>
      <Text text={comment.text} />
    </div>
  );
});
