import { ConvertToRem } from 'helpers';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-height: 196px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  max-width: 250px;

  img {
    position: relative;
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const BrachInformationContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #181818;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  @media (min-width: 768px) {
    padding: 20px 10px;
    align-items: flex-start;
  }
`;

export const BranchOfficeName = styled.span`
  font-weight: 500;
  font-size: ${ConvertToRem(14)};
  line-height: 14px;
  color: #ffffff;

  @media (min-width: 768px) {
    font-size: ${ConvertToRem(18)};
  }
`;
export const BranchOfficeAddress = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #ffffff;
  width: 80%;
  margin-top: 5px;
  text-align: center;

  @media (min-width: 768px) {
    width: 100%;
    text-align: left;
  }
`;

export const Price = styled.div`
  position: absolute;
  bottom: 30px;
  right: 5px;
  color: #fff;
`;

export const Money = styled.div`
  margin-right: 50px;
`;
