import { useGlobal } from 'hooks';

export const ProfessionalsController = () => {
  const {
    states: { professionals },
  } = useGlobal();

  return {
    state: { professionals },
    actions: {},
  };
};
