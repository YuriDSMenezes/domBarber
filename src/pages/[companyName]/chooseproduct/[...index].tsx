import Button from 'components/Button';
import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import * as S from './styles';

const ChooseProduct = () => {
  const { query, push } = useRouter();
  const indexQuery = query.index;
  const [selectedProduct, setSelectedProduct] = useState({});
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
      ...selectedProduct,
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

  useEffect(() => {
    setSelectedProduct(cart[Number(indexQuery)]);
    setQuantity(cart[Number(indexQuery)]?.quantity || 1);
  }, [query]);

  const handleMore = () => {
    setQuantity(quantity + 1);
  };

  const handleLess = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
    return null;
  };

  return (
    <MainLayout>
      <BottomSheetFixedLayout theme="dark">
        <S.Content>
          <S.Title>{selectedProduct?.product?.name}</S.Title>
          <S.Value>R$ {selectedProduct?.product?.price}</S.Value>
          <S.Description>{selectedProduct?.product?.description}</S.Description>

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

export default ChooseProduct;
