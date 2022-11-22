import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import CopyIcon from 'shared/assets/icons/Copy.svg';
import styles from './Code.module.scss';

interface CodeProps {
	className?: string;
  text: string;
}

export const Code = memo(({ className, text }: CodeProps) => {
  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);
  return (
    <pre className={classNames(styles.Code, {}, [className])}>
      <Button onClick={handleCopy} theme={ButtonTheme.CLEAR} className={styles.copyBtn}>
        <CopyIcon className={styles.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
