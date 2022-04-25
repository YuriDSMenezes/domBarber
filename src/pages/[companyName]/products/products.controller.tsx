import { useGlobal } from 'hooks/Global';

export const ProductsController = () => {
  const {
    states: { products },
  } = useGlobal();

  return {
    state: { products },
    actions: {},
  };
};
