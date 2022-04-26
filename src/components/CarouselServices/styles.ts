/* eslint-disable no-nested-ternary */
import { ConvertToRem } from 'helpers';
import styled, { css } from 'styled-components';

interface ItemProps {
  srcImage?: string;
  size?: 'lg' | 'md' | 'sm';
  animate?: boolean;
  active?: boolean;
}

export const Container = styled.div`
  overflow-x: scroll;
  display: flex;
  width: 100%;
  cursor: pointer;

  .showText {
    display: none;
  }
  .showButton {
    display: none;
  }

  &:hover {
    .showText {
      display: block;
    }
    .showButton {
      display: block;
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Content = styled.div`
  height: 242px;
  position: relative;
  @media (min-width: 768px) {
    height: 500px;
  }
`;

export const Item = styled.div<ItemProps>`
  background-image: ${props =>
    props.srcImage
      ? `url('${props.srcImage}')`
      : `url('https://cdn.neemo.com.br/uploads/settings_webdelivery/logo/3957/image-not-found.jpg')`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: ${props =>
    props.size === 'lg' ? '219px' : props.size === 'md' ? '155px' : '120px'};
  min-width: 151px;
  font-weight: 500;
  border-radius: 14px;
  padding: 6px;
  font-size: ${ConvertToRem(12)};
  margin: 0 10px;
  border-radius: 17px;

  @media (min-width: 768px) {
    height: ${props =>
      props.size === 'lg' ? '424px' : props.size === 'md' ? '398px' : '247px'};
    min-width: ${props =>
      props.size === 'lg' ? '293px' : props.size === 'md' ? '306px' : '326px'};
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 17px;
  }
`;

export const BlurContainer = styled.div<ItemProps>`
  ${props =>
    !!props.srcImage &&
    css`
      backdrop-filter: blur(2px);
      border-radius: 17px;
      opacity: 0.6;
      position: absolute;
      bottom: 0px;
      left: 0px;
      width: 100%;
      height: 50px;
      @media (max-width: 768px) {
        bottom: 20px;
        height: 50px;
      }
    `}
`;

export const Texts = styled.div`
  position: absolute;
  bottom: 55px;
  width: 90%;
  z-index: 2;
  left: 50%;
  transform: translate(-50%, 0%);

  @media (min-width: 768px) {
    bottom: 110px;
  }
  p {
    font-weight: 500;
    font-size: ${ConvertToRem(12)};
    margin: 0;
  }

  span {
    font-weight: 400;
    font-size: 10px;
    font-size: ${ConvertToRem(10)};
    margin-top: 5px;
  }

  @media (min-width: 768px) {
    p {
      font-weight: 500;
      font-size: ${ConvertToRem(18)};
      margin: 0;
      margin-top: 5px;
    }

    span {
      font-weight: 400;
      font-size: 10px;
      font-size: ${ConvertToRem(16)};
    }
  }
`;

export const Description = styled.div`
  height: 20px;
  font-weight: 500;
  font-size: ${ConvertToRem(12)};
  margin-top: 7px;
  position: absolute;
  bottom: 0px;
  left: 40px;
  @media (min-width: 768px) {
    bottom: 10px;
    left: 80px;
    font-size: ${ConvertToRem(24)};
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  bottom: 10px;
  width: 100px;

  @media (min-width: 768px) {
    left: 50%;
    transform: translate(-50%, 0%);
    bottom: 60px;
    width: 150px;
  }
`;
