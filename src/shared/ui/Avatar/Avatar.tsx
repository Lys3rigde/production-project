import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import styles from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
	src?: string;
	alt?: string
	size?: number
}

export const Avatar = (props: AvatarProps) => {
  const {
    className,
    src,
    alt,
    size,
  } = props;

  const mods = {};

  const style = useMemo<CSSProperties>(() => ({
    width: size ?? 100,
    height: size ?? 100,
  }), [size]);

  return (
    <img
      src={src}
      style={style}
      className={classNames(styles.Avatar, mods, [className])}
      alt={alt}
    />
  );
};
