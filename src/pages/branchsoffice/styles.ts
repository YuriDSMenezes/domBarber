import styled from 'styled-components';

export const Content = styled.div`
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
`;

export const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
`;

export const BranchsOfficeListContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 40px;
  /* margin-bottom: 40px; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  overflow-y: auto;
`;
