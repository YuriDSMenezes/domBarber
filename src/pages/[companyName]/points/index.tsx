import { getClientFromLocalStorage } from 'cases/client/getClientFromLocalStorage';
import { getUserTokenFromLocalStorage } from 'cases/user/getUserTokenFromLocalStorage';
import { environment } from 'environments/environment.prod';
import { useGlobal } from 'hooks';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import React, { useEffect, useState } from 'react';
import api from 'services/api';
import RegisterPointCard from './RegisterPointCard';

import * as S from './styles';

const points: React.FC = () => {
  const {
    states: { company },
  } = useGlobal();

  const [points, setPoints] = useState('');

  const getClientPoints = async () => {
    try {
      const client = getClientFromLocalStorage();
      if (!client) throw new Error('Cliente não localizado no Local Storage');
      const response = await api.get(`client/point/${client.id}`, {
        headers: {
          ProjectId: environment.projectId,
          CompanyId: company.id,
          Authorization: `Bearer ${getUserTokenFromLocalStorage()}`,
        },
      });
      return setPoints(response.data.total);
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    getClientPoints();
  }, []);

  return (
    <MainLayout>
      <BottomSheetFixedLayout theme="dark">
        <S.Content>
          <S.Title>Pontuação</S.Title>
          <S.AvaliablePointsText>Pontos Disponíveis:</S.AvaliablePointsText>
          <S.AvaliablePointsValue>
            {points === '' ? '0' : points} Pontos
          </S.AvaliablePointsValue>
          <S.PointsHistoryContainer>
            <RegisterPointCard />
          </S.PointsHistoryContainer>
        </S.Content>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export default points;
