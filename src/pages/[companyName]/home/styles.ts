import { ConvertToRem } from 'helpers';
import styled, { css } from 'styled-components';

interface StyleProps {
  bannerUrl?: string;
}

export const Container = styled.div`
  width: 100%;
  padding: 0 16px;
  margin: 0 auto;
  background: var(--background-color);
  height: 100%;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 100%;
    background: none;
    padding: 0;
    display: grid;
    grid-template-columns: 65% 35%;
    grid-template-areas:
      'title title'
      'horizontalList searchInput'
      'banner banner'
      'services services'
      'professionals professionals'
      'products products';
  }
`;

export const TitleContainer = styled.div`
  color: var(--text-color);
  width: 220px;
  margin: 0 auto;
  text-align: center;
  grid-area: title;
  margin-top: 25px;
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
  display: flex;
  justify-content: flex-end;
`;

export const Input = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 337px;
  }
`;

export const BannerContainer = styled.div<StyleProps>`
  width: 100%;
  height: 157px;
  position: relative;

  img {
    background-size: cover;
    width: 100%;
    height: 100%;
    background-position: center;
  }

  border-radius: 17px;
  grid-area: banner;
  @media (min-width: 768px) {
    height: 557px;
    width: 100%;
    margin: 0 auto;
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
  grid-area: services;

  .showText {
    display: none;
  }
  .showButton {
    display: none;
  }

  .splide__slide {
    z-index: 0 !important;
    margin: 0 20px !important;
  }

  .splide__track.splide__track--loop.splide__track--ltr.splide__track--draggable {
    height: 290px !important;
    padding-top: 40px !important;

    @media (min-width: 768px) {
      height: 100% !important;
    }
  }

  .splide__slide.is-active {
    transform: scale(1.4) !important;
    z-index: 999 !important;
    height: 207px !important;
    margin: 0px 20px !important;

    @media (min-width: 768px) {
      height: 430px !important;
    }

    .showText {
      display: block;
    }
    .showButton {
      display: block;
    }
    .item {
      height: 100% !important;
    }
  }
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
  padding: 30px 0;
  text-align: center;
  color: #fff;
  width: 100%;
  grid-area: products;
`;
