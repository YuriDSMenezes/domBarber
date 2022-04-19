/* eslint-disable no-nested-ternary */
import { ConvertToRem } from 'helpers';
import styled from 'styled-components';

export const Container = styled.div`
  overflow-x: scroll;
  display: flex;
  width: 100%;
  @media (min-width: 500px) {
    justify-content: center;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

interface ItemProps {
  size: 'lg' | 'md' | 'sm';
  animate?: boolean;
}

export const Item = styled.div<ItemProps>`
  height: ${props =>
    props.size === 'lg' ? '219px' : props.size === 'md' ? '155px' : '120px'};
  min-width: 151px;
  font-weight: 500;
  border-radius: 14px;
  display: flex;
  align-items: center;
  padding: 6px;
  font-size: ${ConvertToRem(12)};
  margin: 0 10px;
  border-radius: 17px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 17px;
  }

  @media (min-width: 768px) {
    height: ${props =>
      props.size === 'lg' ? '424px' : props.size === 'md' ? '398px' : '247px'};
    width: ${props =>
      props.size === 'lg' ? '293px' : props.size === 'md' ? '306px' : '326px'};
  }
`;
