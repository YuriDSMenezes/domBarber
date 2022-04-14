import Button from 'components/Button';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import React from 'react';
import { OutlinedCheckIcon } from '../../../public/assets';

import * as S from './styles';

const scheduleconfirmed: React.FC = () => {
  return (
    <MainLayout>
      <BottomSheetFixedLayout theme="dark">
        <S.Content>
          <S.ContainerImgConfirmation>
            <img src={OutlinedCheckIcon.src} alt="Checked" />
          </S.ContainerImgConfirmation>
          <S.Title>Agendamento Confirmado!</S.Title>
          <S.MessageText>Você pode realizar o pagamento no Local</S.MessageText>
          <S.AppointmentsContainer />
          <S.TotalAppointmentContainer>
            <S.TotalText>Total</S.TotalText>
            <S.TotalValue>39,90</S.TotalValue>
          </S.TotalAppointmentContainer>
          <S.QuestionUserText>Deseja pagar Agora?</S.QuestionUserText>
          <Button text="Clique Aqui" />
        </S.Content>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export default scheduleconfirmed;
