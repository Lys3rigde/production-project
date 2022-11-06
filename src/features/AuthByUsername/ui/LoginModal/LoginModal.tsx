import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync as LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm.async';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import styles from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string;
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
  <Modal
    className={classNames(styles.LoginModal, {}, [className])}
    isOpen={isOpen}
    onClose={onClose}
    lazy
  >
    <Suspense fallback={<Loader />}>
      <LoginForm />
    </Suspense>
  </Modal>
);
