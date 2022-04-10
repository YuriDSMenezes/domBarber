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
  margin-bottom: 20px;
`;

export const AppointmentsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;
