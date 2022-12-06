import { classNames } from 'shared/lib/classNames/classNames';

interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage = ({ className }: AdminPanelPageProps) => {
  return (
    <div className={classNames('', {}, [className])}>
      {/*  */}
    </div>
  );
};

export default AdminPanelPage;
