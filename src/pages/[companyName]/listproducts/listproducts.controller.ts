import { useGlobal } from 'hooks';

export const ListProductsController = () => {
  const {
    states: { products },
  } = useGlobal();

  return {
    state: { products },
    actions: {},
  };
};
