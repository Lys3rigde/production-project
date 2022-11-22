import { CSSProperties, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Skeleton.module.scss';

interface SkeletonProps {
	className?: string;
	height?: string | number
	width?: string | number
	borderRadius?: string | number
}

export const Skeleton = memo(({
  className, width, height, borderRadius,
}: SkeletonProps) => {
  const style: CSSProperties = {
    width,
    height,
    borderRadius,
  };
  return (
    <div style={style} className={classNames(styles.Skeleton, {}, [className])} />
  );
});
