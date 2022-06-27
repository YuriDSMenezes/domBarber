import { useGlobal } from 'hooks';

export const ChooseProfessionalsController = () => {
  const {
    states: { professionals },
  } = useGlobal();

  return {
    state: { professionals },
    actions: {},
  };
};
