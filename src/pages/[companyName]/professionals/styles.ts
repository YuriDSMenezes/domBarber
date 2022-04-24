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
`;

export const ProfissionalsContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 40px;
  overflow-y: auto;
  /* margin-bottom: 40px; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;
