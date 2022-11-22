import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { ArticleImageBlock } from '../../model/types/article';
import styles from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(({ className, block }: ArticleImageBlockComponentProps) => (
  <div className={classNames(styles.ArticleImageBlockComponent, {}, [className])}>
    <img src={block.src} className={styles.image} alt={block.title ?? 'Image'} />
    {block.title && (
      <Text title={block.title} align={TextAlign.CENTER} />
    )}
  </div>
));
