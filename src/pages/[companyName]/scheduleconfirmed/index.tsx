import AppointmentCard from 'components/AppointmentCard';
import Button from 'components/Button';
import { useGlobal } from 'hooks/Global';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import { useRouter } from 'next/router';
import React from 'react';
import { OutlinedCheckIcon } from '../../../../public/assets';

import * as S from './styles';

const scheduleconfirmed: React.FC = () => {
  const { push } = useRouter();
  const {
    states: { company },
  } = useGlobal();

  return (
    <MainLayout>
      <BottomSheetFixedLayout theme="dark">
        <S.Content>
          <S.ContainerImgConfirmation>
            <img src={OutlinedCheckIcon.src} alt="Checked" />
          </S.ContainerImgConfirmation>
          <S.Title>Agendamento Confirmado!</S.Title>
          <S.MessageText>Você pode realizar o pagamento no Local</S.MessageText>
          <S.AppointmentsContainer>
            <AppointmentCard
              appointment={{
                date: new Date(),
                description: 'Corte Simples',
                value: 19.9,
                points: 20,
                paymentStatus: 'Pagamento Pendente',
                professional: 'Paulo R.',
                avatar:
                  'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              }}
            />
            <AppointmentCard
              appointment={{
                date: new Date(),
                description: 'Corte Simples',
                value: 19.9,
                points: 20,
                paymentStatus: 'Pagamento Pendente',
                professional: 'Paulo R.',
                avatar:
                  'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              }}
            />
            <AppointmentCard
              appointment={{
                date: new Date(),
                description: 'Corte Simples',
                value: 19.9,
                points: 20,
                paymentStatus: 'Pagamento Pendente',
                professional: 'Paulo R.',
                avatar:
                  'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              }}
            />
          </S.AppointmentsContainer>
          <S.TotalAppointmentContainer>
            <S.TotalText>Total</S.TotalText>
            <S.TotalValue>39,90</S.TotalValue>
          </S.TotalAppointmentContainer>
          <S.QuestionUserText>Deseja pagar Agora?</S.QuestionUserText>
          <Button
            text="Clique Aqui"
            onClick={() =>
              push({
                pathname: `/[companyName]/checkout`,
                query: { companyName: company?.app?.url },
              })
            }
          />
        </S.Content>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export default scheduleconfirmed;
