import { useGlobal } from 'hooks/Global';

export const NewServiceController = () => {
  const {
    states: { services },
  } = useGlobal();

  return {
    state: { services },
    actions: {},
  };
};
