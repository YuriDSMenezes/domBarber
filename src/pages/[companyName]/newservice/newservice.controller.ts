import { useGlobal } from 'hooks';

export const NewServiceController = () => {
  const {
    states: { services, kits },
  } = useGlobal();

  return {
    state: { services, kits },
    actions: {},
  };
};
