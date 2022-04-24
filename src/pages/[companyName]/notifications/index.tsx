import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import React from 'react';
import { MediumPapperIcon } from '../../../../public/assets';
import NotificationCard from './NotificationCard';

import * as S from './styles';

const notifications: React.FC = () => {
  const notificationExists = true;
  return (
    <MainLayout>
      <BottomSheetFixedLayout theme="dark">
        <S.Content>
          <S.Title>Notificação</S.Title>
          {notificationExists ? (
            <S.NotificationsContainer>
              <NotificationCard />
              <NotificationCard />
              <NotificationCard />
              <NotificationCard />
            </S.NotificationsContainer>
          ) : (
            <S.NotificationsNotExists>
              <S.NotificationNotExistsImgContainer>
                <img src={MediumPapperIcon.src} alt="Papper" />
              </S.NotificationNotExistsImgContainer>
              <S.MessageNotificationsNotExists>
                Nenhuma Mensagem Encontrada
              </S.MessageNotificationsNotExists>
            </S.NotificationsNotExists>
          )}
        </S.Content>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export default notifications;
