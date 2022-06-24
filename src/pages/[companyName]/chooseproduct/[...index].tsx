import Button from 'components/Button';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import api from 'services/api';
import { getCookies } from 'cookies-next';
import * as S from './styles';

const ChooseProduct = ({ products }: any) => {
  const { query, push } = useRouter();
  const [quantity, setQuantity] = useState(1);

  const [cart, setCart] = useState(() => {
    if (typeof window !== 'undefined') {
      const cart = localStorage.getItem('@domBarber:cart');

      if (cart) {
        const parsedCart = JSON.parse(cart);
        return parsedCart;
      }
    }

    return [];
  });

  const handleAdd = () => {
    const newProduct = {
      ...cart[cart.length - 1],
      quantity,
    };
    cart.pop();
    const newCart = [...cart, newProduct];
    if (typeof window !== 'undefined') {
      localStorage.setItem('@domBarber:cart', JSON.stringify(newCart));
    }
    push({
      pathname: `/ps1/cart`,
    });
  };

  const handleMore = () => {
    setQuantity(quantity + 1);
  };

  const handleLess = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
    return null;
  };

  const product = products.find(
    (product: any) => product.id === cart[cart.length - 1]?.product?.id,
  );

  return (
    <MainLayout>
      <BottomSheetFixedLayout theme="dark">
        <S.Content>
          <S.Title>{product?.name}</S.Title>
          <S.Value>R$ {product?.price}</S.Value>
          <S.Description>{product?.description}</S.Description>

          <S.Quantity>
            <S.More onClick={handleMore}> + </S.More>
            <input type="number" min={1} max={100} value={quantity} step={1} />
            <S.Less onClick={handleLess}> - </S.Less>
          </S.Quantity>
          <S.Button>
            <Button text="Adicionar" onClick={handleAdd}></Button>
          </S.Button>
        </S.Content>
      </BottomSheetFixedLayout>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const cookies = getCookies({ req, res });
  const token = cookies['@domBarber:token'];
  const client = cookies['@domBarber:client'];
  const company = cookies['@domBarber:company'];
  const parsedClient = JSON.parse(client);
  const companyId = company.replace(/"/g, '');
  const paramsGetAuth = new URLSearchParams([['companyId', companyId]]);
  const products = await api.get(`product`, {
    headers: {
      Authorization: `Bearer ${token}`,
      ProjectId: parsedClient?.projectId,
    },
    params: paramsGetAuth,
  });

  return {
    props: { products: products.data },
  };
};

export default ChooseProduct;
