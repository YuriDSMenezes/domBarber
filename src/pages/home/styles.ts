import { ConvertToRem } from 'helpers';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #1c1c1c;
  height: 100%;
  padding-top: 50px;
  @media (min-width: 768px) {
  }
`;

export const TitleContainer = styled.div`
  color: #fff;
  width: 220px;
  margin: 0 auto;
  text-align: center;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: ${ConvertToRem(20)};
`;

export const TitleDescription = styled.div`
  margin-top: 5px;
  font-weight: 400;
  font-size: ${ConvertToRem(16)};
`;

export const InputContainer = styled.div`
  width: 100%;
  margin: 35px 0;
  grid-area: searchInput;
`;

export const BannerContainer = styled.div`
  height: 157px;
  border-radius: 17px;
  text-align: center;
  background: #fff;
  grid-area: banner;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 17px;
  }
  @media (min-width: 768px) {
    width: 100%;
    margin: 0 auto;
    height: 500px;
  }
`;

export const HorizontalListContainer = styled.div`
  width: 100%;
  grid-area: horizontalList;
  @media (min-width: 768px) {
  }
`;

export const ServiceContainer = styled.div`
  text-align: center;
  color: #fff;
  width: 100%;
  grid-area: services;
`;

export const Description = styled.div`
  font-weight: 500;
  margin-bottom: 30px;
  font-size: ${ConvertToRem(18)};
  margin-top: 70px;

  @media (min-width: 768px) {
    margin-top: 160px;
    font-size: ${ConvertToRem(32)};
  }
`;

export const SeeMore = styled.div`
  cursor: pointer;
  color: #717171;
  font-size: ${ConvertToRem(12)};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  margin: 30px auto 20px auto;
  width: 100%;

  img {
    width: 15px;
    height: 10px;
    object-fit: contain;
  }

  p {
    margin-right: 5px;
  }

  @media (min-width: 768px) {
    font-size: ${ConvertToRem(24)};
    margin: 70px auto 0 auto;
  }
`;

export const Professional = styled.div`
  margin: 30px 0;
  text-align: center;
  color: #fff;
  width: 100%;
  grid-area: professionals;
`;

export const Products = styled.div`
  margin: 30px 0;
  text-align: center;
  color: #fff;
  width: 100%;
  grid-area: products;
`;
