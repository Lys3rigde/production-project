import { classNames } from 'shared/lib/classNames/classNames';
import React, {
  ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import styles from './Modal.module.scss';

interface ModalProps {
  className?: string;
	children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
  const {
    children,
    className,
    isOpen,
    onClose,
    lazy,
  } = props;

  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const handleCloseModal = useCallback(() => {
    if (!onClose) return;
    setIsClosing(true);
    timerRef.current = setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, ANIMATION_DELAY);
  }, [onClose]);

  const handleEscKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') handleCloseModal();
  }, [handleCloseModal]);

  const onContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleEscKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', handleEscKeyDown);
    };
  }, [isOpen, handleEscKeyDown]);

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing,
  };

  if (lazy && !isMounted) return null;

  return (
    <Portal>
      <div className={classNames(styles.Modal, mods, [className])}>
        <div className={styles.overlay} onClick={handleCloseModal}>
          <div className={styles.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
