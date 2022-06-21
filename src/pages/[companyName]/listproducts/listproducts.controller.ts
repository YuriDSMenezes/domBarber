import { useGlobal } from 'hooks/Global';

export const ListProductsController = () => {
  const {
    states: { products },
  } = useGlobal();

  return {
    state: { products },
    actions: {},
  };
};
