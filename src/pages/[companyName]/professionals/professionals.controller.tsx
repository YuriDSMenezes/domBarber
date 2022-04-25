import { useGlobal } from 'hooks/Global';

export const ProfessionalsController = () => {
  const {
    states: { professionals },
  } = useGlobal();

  return {
    state: { professionals },
    actions: {},
  };
};
