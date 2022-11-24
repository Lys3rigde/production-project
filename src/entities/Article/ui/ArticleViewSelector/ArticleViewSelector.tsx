import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import GridIcon from 'shared/assets/icons/Grid.svg';
import ListIcon from 'shared/assets/icons/List.svg';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleView } from '../../model/types/article';
import styles from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
	className?: string;
  view: ArticleView;
  handleViewClick?: (view: ArticleView) => void
}

const viewTypes = [
  {
    view: ArticleView.LIST,
    icon: ListIcon,
  },
  {
    view: ArticleView.GRID,
    icon: GridIcon,
  },
];

export const ArticleViewSelector = memo(({ className, view, handleViewClick }: ArticleViewSelectorProps) => {
  const { t } = useTranslation();

  const handleClick = (newView: ArticleView) => () => {
    handleViewClick?.(newView);
  };

  return (
    <div className={classNames(styles.ArticleViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          key={viewType.view}
          theme={ButtonTheme.CLEAR}
          onClick={handleClick(viewType.view)}
        >
          <Icon
            Svg={viewType.icon}
            className={classNames('', { [styles.notSelected]: viewType.view !== view }, [])}
          />
        </Button>
      ))}
    </div>
  );
});
