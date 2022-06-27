import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import Tabs from 'components/Tabs';
import nookies from 'nookies';
import { GetServerSideProps } from 'next';
import api from 'services/api';
import * as S from './styles';
import Open from './open';
import Paid from './paid';

const Requests = ({ requests }: any) => {
  const tabs = [
    {
      key: 'Comandas abertas',
      description: 'Comandas abertas',
      renderComponentMobile: <Open requests={requests} />,
    },
    {
      key: 'Comandas Pagas',
      description: 'Comandas Pagas',
      renderComponentMobile: <Paid />,
    },
  ];

  return (
    <MainLayout>
      <BottomSheetFixedLayout theme="dark">
        <S.Content>
          <S.Title>Pedidos</S.Title>
          <Tabs tabConfig={tabs} defaultSelectedTab="Comandas abertas" />
        </S.Content>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const cookies = nookies.get(context);
  const token = cookies['@domBarber:token'];
  const client = cookies['@domBarber:client'];
  const company = cookies['@domBarber:company'];
  const parsedClient = JSON.parse(client);
  const companyId = company.replace(/"/g, '');
  const tokenWithoutQuotes = token.replace(/"/g, '');
  const paramsGetAuth = new URLSearchParams([['clientId', parsedClient.id]]);
  try {
    const requests = await api.get(`command/client`, {
      headers: {
        Authorization: `Bearer ${tokenWithoutQuotes}`,
        ProjectId: parsedClient?.projectId,
        CompanyId: companyId,
      },
      params: paramsGetAuth,
    });
    return {
      props: {
        requests: requests.data,
      },
    };
  } catch (err) {
    return {
      props: {
        requests: [],
      },
    };
  }
};

export default Requests;
