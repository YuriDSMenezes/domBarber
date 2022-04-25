import { useGlobal } from 'hooks/Global';

export const ProductsController = () => {
  const {
    states: { services },
  } = useGlobal();

  return {
    state: { services },
    actions: {},
  };
};
