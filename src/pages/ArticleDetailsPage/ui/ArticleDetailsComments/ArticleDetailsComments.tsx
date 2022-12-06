import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { AddCommentForm } from 'features/addCommentForm';
import { CommentList } from 'entities/Comment';
import { useDispatch, useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import {
  fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';

interface ArticleDetailsCommentsProps {
	className?: string;
  id: string
}

export const ArticleDetailsComments = memo(({ className, id }: ArticleDetailsCommentsProps) => {
  const { t } = useTranslation('article');
  const dispatch = useDispatch();

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id?.toString()));
  });

  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  const handleSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  return (
    <div className={classNames('', {}, [className])}>
      <Text size={TextSize.L} title={t('Комментарии')} />
      <AddCommentForm
        handleSendComment={handleSendComment}
      />
      <CommentList
        isLoading={commentsIsLoading}
        comments={comments}
      />
    </div>
  );
});
