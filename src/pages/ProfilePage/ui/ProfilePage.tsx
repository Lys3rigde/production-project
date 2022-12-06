import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { EditableProfileCard, EditableProfileCardHeader } from 'features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { id } = useParams<{id: string}>();
  const { t } = useTranslation('profile');

  if (!id) {
    return <Text title={t('Профиль не найден')} />;
  }

  return (
    <Page className={classNames('', {}, [className])}>
      <VStack max gap="16">
        <EditableProfileCardHeader />
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;
