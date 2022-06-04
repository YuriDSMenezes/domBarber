import { useGlobal } from 'hooks/Global';

export const NewServiceController = () => {
  const {
    states: { services, kits },
  } = useGlobal();

  return {
    state: { services, kits },
    actions: {},
  };
};
