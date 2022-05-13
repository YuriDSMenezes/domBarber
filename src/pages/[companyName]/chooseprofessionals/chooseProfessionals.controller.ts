import { useGlobal } from 'hooks/Global';

export const ChooseProfessionalsController = () => {
  const {
    states: { professionals },
  } = useGlobal();

  return {
    state: { professionals },
    actions: {},
  };
};
