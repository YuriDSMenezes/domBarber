import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #272727;
`;

export const PaymentMethodsContainer = styled.div`
  width: 100%;
  height: 80%;
  overflow-y: auto;
  padding-top: 40px;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
