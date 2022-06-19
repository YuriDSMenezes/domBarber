import { useGlobal } from 'hooks/Global';

export const ListProductsController = () => {
  const {
    states: { products },
  } = useGlobal();

  console.log(products);

  return {
    state: { products },
    actions: {},
  };
};
