import { ConvertToRem } from 'helpers';
import styled from 'styled-components';

interface ItemProps {
  active?: boolean;
}

export const Container = styled.div`
  height: 40px;
  overflow-x: auto;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 30px 0 40px 0;
  @media (min-width: 768px) {
    margin-top: 50px;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.div<ItemProps>`
  cursor: pointer;
  width: fit-content;
  height: 24px;
  color: var(--text-color);
  font-weight: 500;
  border-radius: 14px;
  display: flex;
  align-items: center;
  padding: 6px;
  font-size: ${ConvertToRem(12)};
  margin: 0 10px;
  &:nth-child(1) {
    margin: 0;
  }
  @media (min-width: 768px) {
    font-size: ${ConvertToRem(18)};
  }
`;
