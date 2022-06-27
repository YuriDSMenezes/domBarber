import { useGlobal } from 'hooks';

export const ProductsController = () => {
  const {
    states: { products },
  } = useGlobal();

  return {
    state: { products },
    actions: {},
  };
};
