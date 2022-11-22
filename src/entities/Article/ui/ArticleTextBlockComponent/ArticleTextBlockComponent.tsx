import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { ArticleTextBlock } from '../../model/types/article';
import styles from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
	className?: string;
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo(({ className, block }: ArticleTextBlockComponentProps) => (
  <div className={classNames(styles.ArticleTextBlockComponent, {}, [className])}>
    {block.title && (
      <Text title={block.title} className={styles.title} />
    )}
    {block.paragraphs.map((paragrph) => (
      <Text
        key={paragrph}
        text={paragrph}
        className={styles.paragraph}
      />
    ))}
  </div>
));
