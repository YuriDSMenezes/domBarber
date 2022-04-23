import { ConvertToRem } from 'helpers';
import styled from 'styled-components';

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const TitleOut = styled.h1`
  font-weight: 500;
  font-size: ${ConvertToRem(36)};
  line-height: 21px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 100px;
`;
