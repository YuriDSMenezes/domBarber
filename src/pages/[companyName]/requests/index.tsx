import { useEffect, useState } from 'react';
import { getCommandsOpen } from 'cases/command/getCommandsOpen';
import { useGlobal } from 'hooks/Global';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import Tabs from 'components/Tabs';
import * as S from './styles';
import Open from './open';
import Paid from './paid';

const Requests = () => {
  const {
    states: { company },
  } = useGlobal();
  const [openCommands, setOpenCommands] = useState();
  const [client, setClient] = useState(() => {
    if (typeof window !== 'undefined') {
      const client = localStorage.getItem('@domBarber:client');

      if (client) {
        return JSON.parse(client);
      }
    }
    return null;
  });

  const [token, setToken] = useState(() => {
    if (typeof window !== 'undefined') {
      const clientId = localStorage.getItem('@domBarber:token');

      if (clientId) {
        return JSON.parse(clientId);
      }
    }
    return null;
  });

  const getOpenCommands = async () => {
    const commandsOpen = await getCommandsOpen(
      company?.companyId,
      client?.id,
      token,
    );
    setOpenCommands(commandsOpen);
  };

  useEffect(() => {
    getOpenCommands();
  }, []);

  const tabs = [
    {
      key: 'Comandas abertas',
      description: 'Comandas abertas',
      renderComponentMobile: <Open />,
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

export default Requests;
