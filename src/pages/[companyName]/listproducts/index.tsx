import BottomSheetFixedLayout from 'layouts/BottomSheetFixedLayout';
import MainLayout from 'layouts/MainLayout';
import React from 'react';
import { GetServerSideProps } from 'next';
import api from 'services/api';
import { getCookies } from 'cookies-next';
import ProductCard from './productsCard';

import * as S from './styles';

const ListProducts: React.FC = ({ products }) => {
  return (
    <MainLayout>
      <S.TitleOut>Lista de Produtos</S.TitleOut>
      <BottomSheetFixedLayout theme="dark">
        <S.Content>
          <S.Title>Lista de Produtos</S.Title>
          <S.ProfissionalsContainer>
            <S.DesktopProfessionals>
              <ProductCard list={products} />
            </S.DesktopProfessionals>
            <S.MobileProfessionals>
              <ProductCard list={products} />
            </S.MobileProfessionals>
          </S.ProfissionalsContainer>
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
      Authoriazation: `Bearer ${token}`,
      ProjectId: parsedClient?.projectId,
    },
    params: paramsGetAuth,
  });

  return {
    props: { products: products.data },
  };
};

export default ListProducts;
