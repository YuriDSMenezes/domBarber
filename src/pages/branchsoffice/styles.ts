import { ConvertToRem } from 'helpers';
import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    width: 70%;
    margin: 0 auto;
  }
`;

export const TitleOut = styled.h1`
  text-align: center;
  font-weight: 500;
  font-size: ${ConvertToRem(36)};
  line-height: 21px;
  color: #ffffff;
  margin: 50px 0;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const SubTitleOut = styled.h2`
  font-weight: 400;
  font-size: ${ConvertToRem(26)};
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 50px;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const BranchsOfficeListContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 40px;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  @media (min-width: 768px) {
    place-items: center;
  }
`;
