import { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from 'entities/Article';

interface ArticleTypeTabsProps {
	className?: string;
  value: ArticleType,
  handleChangeType: (tab: TabItem) => void
}

export const ArticleTypeTabs = memo(({ className, value, handleChangeType }: ArticleTypeTabsProps) => {
  const { t } = useTranslation('article');

  const typeTabs = useMemo<TabItem[]>(() => [
    {
      value: ArticleType.ALL,
      content: t('Все'),
    },
    {
      value: ArticleType.IT,
      content: t('Айти'),
    },
    {
      value: ArticleType.ECONOMICS,
      content: t('Экономика'),
    },
    {
      value: ArticleType.SCIENCE,
      content: t('Наука'),
    },

  ], [t]);

  return (
    <Tabs
      className={classNames('', {}, [className])}
      tabs={typeTabs}
      value={value}
      onTabClick={handleChangeType}
    />
  );
});
