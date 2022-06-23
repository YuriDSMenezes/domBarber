import React from 'react';
import { Service } from 'models/types/service';
import MainLayout from 'layouts/MainLayout';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import Tabs from 'components/Tabs';
import { GetServerSideProps } from 'next';
import api from 'services/api';
import { getCookies } from 'cookies-next';
import ServiceCard from './serviceCard';
import * as S from './styles';
import KitsAndCombosTabOption from '../newservice/KitsAndCombosTabOption';

interface ServiceProps {
  list: Array<Service>;
}

const Services: React.FC<ServiceProps> = ({ services, kits }: ServiceProps) => {
  const tabs = [
    {
      key: 'Serviços',
      description: 'Serviços',
      renderComponentMobile: <ServiceCard list={services} />,
    },
    {
      key: 'Kits/Combo',
      description: 'Kits/Combo',
      renderComponentMobile: <KitsAndCombosTabOption list={kits} />,
    },
  ];

  return (
    <MainLayout>
      <BottomSheetFixedLayout theme="dark">
        <S.Content>
          <S.Title>Lista de Serviços</S.Title>
          <div style={{ display: 'block', overflowY: 'scroll' }}>
            <Tabs tabConfig={tabs} defaultSelectedTab="Serviços" />
          </div>
        </S.Content>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const cookies = getCookies({ req, res });
  const token = cookies['@domBarber:token'];
  const client = cookies['@domBarber:client'];
  const company = cookies['@domBarber:company'];
  const parsedClient = JSON.parse(client);
  const companyId = company.replace(/"/g, '');
  const paramsGetAuth = new URLSearchParams([['companyId', companyId]]);
  const services = await api.get(`service`, {
    headers: {
      Authoriazation: `Bearer ${token}`,
      ProjectId: parsedClient?.projectId,
    },
    params: paramsGetAuth,
  });
  const kits = await api.get('kit', {
    headers: {
      Authoriazation: `Bearer ${token}`,
      ProjectId: parsedClient?.projectId,
    },
    params: paramsGetAuth,
  });

  return {
    props: { services: services.data, kits: kits.data },
  };
};

export default Services;
